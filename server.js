const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://troylu6:8T09AO7DvyS8wuHL@wheely.xms60gm.mongodb.net/Wheely?retryWrites=true&w=majority&appName=Wheely')


const carSchema = {
    car_id: Number, 
    car_location: String, 
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

const CarList = mongoose.model('cars', carSchema);


app.get('/', (req, res) => {
    CarList.find().then(function(cars) {
        res.render('main', {
            carList: cars
        })
    }).catch(function (err) {
        console.log(err)
    })
});
app.use('/public', express.static('public'));
app.listen(5000, () => console.log(`Server running on port 5000`));
