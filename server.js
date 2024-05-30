const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://troylu6:8T09AO7DvyS8wuHL@wheely.xms60gm.mongodb.net/Wheely?retryWrites=true&w=majority&appName=Wheely')


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
}

/* const reviewSchema = {
    review_id: String, 
    review_star: Number, 
} */

const CarList = mongoose.model('cars', carSchema);
const ListingList = mongoose.model('listings', listingSchema);
// const ReviewList = mongoose.model('reviews', reviewSchema);


app.get('/', (req, res) => {
    CarList.find().then(function(cars) {
        res.render('main', {
            carList: cars
        })
    }).catch(function (err) {
        console.log(err)
    })
});


app.get('/cars/:id', (req, res) => {
    const carId = req.params.id;
    Promise.all([
        CarList.findOne({ car_id: carId }).exec(),
        ListingList.find({ car_id: carId }).exec()
        //,ReviewList.find({ car_id: carId }).exec()
    ]).then(([car, listings, reviews]) => {
        if (car) {
            res.render('detailed_info', { car, ListingList: listings}); // , ReviewList: reviews});
        }
    }).catch(err => {
        console.log(err);
    });
});




app.use('/public', express.static('public'));

app.listen(5000, () => console.log(`Server running on port 5000`));
