const express = require('express');
const mongoose = require('mongoose');
const app = express(); 
const ejs = require('ejs');


app.set('view engine', 'ejs');
mongoose.connect('mongodb+srv://troylu6:8T09AO7DvyS8wuHL@wheely.xms60gm.mongodb.net/?retryWrites=true&w=majority&appName=Wheely');

const listingSchema = {
    listing_id: INT,
    available_dates: String, 
    available_time: String, 
    date_rented: String, 
    date_returned: String, 
    driven_mi: INT, 
    car_id: INT, 
    renter: String, 
    owner: String, 
    renter_name: String, 
    owner_name: String
}

const Listing = mongoose.model('Listing', listingSchema)

app.get('/', (req, res) => {
    Listing.find({}, function(listings) {
        res.sendFile(__dirname + '/main.html', {listingName: listings})
    })
})

app.listen(4000, function() {
    console.log('server is running')
})