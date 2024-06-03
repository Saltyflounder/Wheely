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
            res.render('pay_page', { car, ListingList: listings });
        }
    }).catch(err => {
        console.log(err);
    });
});

app.post('/pay_process', (req, res) => {
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
        // If there are validation errors, re-render the payment page with errors
        res.render('pay_page', { errors });
    } else {
        // Process the payment (this is a placeholder for actual payment logic)
        // For example, call the payment gateway API here

        res.send("Payment processed successfully!");
    }
});

app.get('/car_upload_page', (req, res) => {
    res.render('car_upload_page');
});

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

app.get('/pay_page', (req, res) => {
    CarList.find().then(function(cars) {
        res.render('pay_page', {
            carList: cars
        });
    }).catch(function (err) {
        console.log(err);
    });
});

app.use('/public', express.static('public'));

app.listen(8000, () => console.log(`Server running on port 8000`));
