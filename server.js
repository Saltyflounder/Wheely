const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://troylu6:8T09AO7DvyS8wuHL@wheely.xms60gm.mongodb.net/Wheely?retryWrites=true&w=majority&appName=Wheely');

const carSchema = {
    car_id: Number, 
    parking_name: String, 
    parking_street: String, 
    parking_city: String, 
    parking_state: String, 
    parking_zip: String,
    car_VIN: String, 
    car_before_1981: Number, 
    car_year: Number, 
    car_make: String, 
    car_model: String, 
    car_odometer: Number, 
    car_transmission: String, 
    car_value: Number, 
    car_price_per_day: Number, 
    car_info: String, 
    car_plate: String, 
    car_mpg: Number, 
    car_class: String, 
    car_combination_mpg: Number, 
    car_cylinder: Number, 
    car_displacement: String, 
    car_drive: String,
    car_fuel_type: String, 
    car_highway_mpg: Number,
    car_rating: Number
};

const listingSchema = {
    listing_id: Number, 
    available_dates: String, 
    available_time: String, 
    date_rented: String, 
    date_returned: String, 
    driven_mi: Number, 
    car_id: Number, 
    renter: String, 
    owner: String, 
    renter_name: String, 
    owner_name: String
};


const carImgSchema = {
    car_id: Number, 
    image: String,
    description: String
};

const CarList = mongoose.model('cars', carSchema);
const ListingList = mongoose.model('listings', listingSchema);
const CarImgList = mongoose.model('car_imgs', carImgSchema);

/* app.get('/', (req, res) => {
    CarList.find().then(function(cars) {
        res.render('main', {
            carList: cars
        });
    }).catch(function (err) {
        console.log(err);
    });
});*/ 

app.get('/', (req, res) => {
    Promise.all([
        CarList.find().exec(), 
        CarImgList.find().exec()
    ]).then(([car, image]) => {
        res.render('main', { carList: car, imageList: image})
    }).catch(err => { console.log(err); })
})

app.get('/cars/:id', (req, res) => {
    const carId = req.params.id;
    Promise.all([
        CarList.findOne({ car_id: carId }).exec(),
        ListingList.find({ car_id: carId }).exec(),
        CarImgList.find().exec()
    ]).then(([car, listings, image]) => {
        if (car) {
            res.render('detailed_info', { car, ListingList: listings, imageList: image });
        }
    }).catch(err => {
        console.log(err);
    });
});

app.get('/pay/:id', (req, res) => {
    const carId = req.params.id;
    Promise.all([
        CarList.findOne({ car_id: carId }).exec(),
        ListingList.find({ car_id: carId }).exec(),
        CarImgList.find().exec()
    ]).then(([car, listings]) => {
        if (car) {
            res.render('pay_page', { car, ListingList: listings, imageList: images });
        }
    }).catch(err => {
        console.log(err);
    });
});

app.post('/pay_page', (req, res) => {
    const { name, cardNumber, expirationDate, cvv, address, zipCode } = req.body;
    let errors = [];

    // Regular expressions for validation
    const cardNumberRegex = /^\d{16}$/;
    const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;
    const cvvRegex = /^\d{3}$/;
    const zipCodeRegex = /^\d{5}$/;

    // Server-side validation
    if (!name || name.trim() === "") {
        errors.push("Name on card is required.");
    }
    if (!cardNumberRegex.test(cardNumber)) {
        errors.push("Card number must be 16 digits.");
    }
    if (!expirationDateRegex.test(expirationDate)) {
        errors.push("Expiration date must be in MM/YYYY format.");
    }
    if (!cvvRegex.test(cvv)) {
        errors.push("CVV must be 3 digits.");
    }
    if (!address || address.trim() === "") {
        errors.push("Address is required.");
    }
    if (!zipCodeRegex.test(zipCode)) {
        errors.push("Zip code must be 5 digits.");
    }

    if (errors.length > 0) {
        const carId = req.body.car_id; // Assuming car_id is sent in the form data
        Promise.all([
            CarList.findOne({ car_id: carId }).exec(),
            ListingList.find({ car_id: carId }).exec(),
            CarImgList.find().exec()
        ]).then(([car, listings, images]) => {
            if (car) {
                res.render('pay_page', { errors, car, ListingList: listings, imageList: images });
            }
        }).catch(err => {
            console.log(err);
        });
    } else {
        
        res.render('payment_success');
    }
});


app.get('/car_upload_page', (req, res) => {
    CarList.find().then(function (cars) {
        res.render('car_upload_page', {
            carList: cars
        });
    }).catch(function (err) {
        console.log(err);
    });
});

app.get('/payment_success', (req, res) => {
    res.render('payment_success');
});

app.post('/upload_car', (req, res) => {
    let newCar = new CarList({
        car_id: req.body.car_id,
        parking_street: req.body.parking_street,
        parking_city: req.body.parking_city,
        parking_state: req.body.parking_state,
        parking_zip: req.body.parking_zip,
        car_VIN: req.body.car_VIN,
        car_before_1981: req.body.car_before_1981,
        car_year: req.body.car_year,
        car_make: req.body.car_make,
        car_model: req.body.car_model,
        car_odometer: req.body.car_odometer,
        car_transmission: req.body.car_transmission,
        car_price_per_day: req.body.car_price_per_day,
        car_info: req.body.car_info,
        car_plate: req.body.car_plate,
        car_class: req.body.car_class,
        car_fuel_type: req.body.car_fuel_type,
        car_highway_mpg: req.body.car_highway_mpg,
        car_image: req.body.car_image // Make sure the image URL is stored
    });

    let newListing = new ListingList({
        pick_up_date: req.body.pick_up_date, 
        return_date: req.body.return_date, 
        owner_name: req.body.owner_name
    });
    newCar.save().then(() => { newListing.save().then(() => {        
        res.render('upload_success'), {
    };})
    }).catch(err => {
        console.log(err);
    });
});

app.get('/pay_page', (req, res) => {
    CarList.find().then(function(cars) {
        res.render('pay_page', {
            carList: cars
        });
    }).catch(function (err) {
        console.log(err);
    });
});

app.get('/search', (req, res) => {
    const searchQuery = req.query.location;
    
    Promise.all([
        CarList.find({
            $or: [
                { parking_city: { $regex: searchQuery, $options: 'i' } },
                { parking_street: { $regex: searchQuery, $options: 'i' } }
            ]
        }).exec(),
        CarImgList.find().exec()
    ]).then(([cars, images]) => {
        res.render('result', {
            carList: cars,
            imageList: images,
            query: searchQuery
        });
    }).catch(err => {
        console.log(err);
        res.status(500).send('Error occurred during search');
    });
});


app.use('/public', express.static('public'));

app.listen(8000, () => console.log(`Server running on port 8000`));
