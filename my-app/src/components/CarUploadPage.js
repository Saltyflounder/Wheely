import React from 'react';
import '../styles/car_upload_style.css';

function CarUploadPage() {
    return (
        <div>
            <div className="header">
                <div className="logo">
                    <a href="main.html">
                        <img src="img/logo.png" alt="Wheely Logo" />
                    </a>
                    <span>Wheely</span>
                </div>
                <div className="navbar">
                    <img src="img/navbar.png" alt="Nav Bar Icon" />
                </div>
                <div className="profile">
                    <a href="userprofile.html">
                        <img src="img/pfp.png" alt="Profile Image" />
                    </a>
                </div>
            </div>

            <div className="content">
                <h1>Car Information</h1>
                <form id="carUploadForm">
                    <div className="form-left">
                        <div className="location">
                            <div>
                                <label htmlFor="street">Street:</label>
                                <input type="text" id="street" required />
                            </div>
                            <div>
                                <label htmlFor="city">City:</label>
                                <input type="text" id="city" required />
                            </div>
                            <div>
                                <label htmlFor="state">State:</label>
                                <input type="text" id="state" required />
                            </div>
                            <div>
                                <label htmlFor="zipCode">Zip Code:</label>
                                <input type="text" id="zipCode" required />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="vin">VIN:</label>
                            <input type="text" id="vin" required />
                            <input type="checkbox" id="oldModelCheckbox" />
                            <label htmlFor="oldModelCheckbox">My model year is 1981 or earlier</label>
                        </div>
                        <div>
                            <label htmlFor="make">Make:</label>
                            <select id="yearDropdown"></select>
                            <select id="makeDropdown"></select>
                            <label>Model:</label>
                            <input type="text" id="model" required />
                        </div>
                        <div>
                            <label htmlFor="odometer">Odometer:</label>
                            <select id="odometerDropdown"></select>
                        </div>
                        <div>
                            <label>Transmission:</label>
                            <div>
                                <input type="radio" id="automatic" name="transmission" value="automatic" required />
                                <label htmlFor="automatic">Automatic</label>
                            </div>
                            <div>
                                <input type="radio" id="manual" name="transmission" value="manual" />
                                <label htmlFor="manual">Manual</label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="value">Vehicle Value:</label>
                            <input type="text" id="value" required />
                        </div>
                        <div>
                            <label htmlFor="price">Price per day:</label>
                            <input type="number" id="price" required />
                        </div>
                        <div>
                            <label htmlFor="additionalInfo">Additional Information:</label>
                            <input type="text" id="additionalInfo" />
                        </div>
                        <div>
                            <label htmlFor="plate">Plate Number:</label>
                            <input type="text" id="plate" required />
                        </div>
                        <div>
                            <label htmlFor="car_mpg">MPG:</label>
                            <input type="text" id="car_mpg" />
                        </div>
                        <div>
                            <label htmlFor="car_class">Class:</label>
                            <select id="car_class">
                                <option value="sedan">Sedan</option>
                                <option value="suv">SUV</option>
                                <option value="truck">Truck</option>
                                <option value="coupe">Coupe</option>
                                <option value="convertible">Convertible</option>
                                <option value="hatchback">Hatchback</option>
                                <option value="minivan">Minivan</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="car_cylinder">Cylinder:</label>
                            <input type="text" id="car_cylinder" />
                        </div>
                        <div>
                            <label htmlFor="car_drive">Drive:</label>
                            <select id="car_drive">
                                <option value="fwd">FWD</option>
                                <option value="rwd">RWD</option>
                                <option value="awd">AWD</option>
                                <option value="4wd">4WD</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="car_fuel_type">Fuel Type:</label>
                            <select id="car_fuel_type">
                                <option value="gasoline">Gasoline</option>
                                <option value="diesel">Diesel</option>
                                <option value="electric">Electric</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-right">
                        <div>
                            <label htmlFor="photo">Upload Photo:</label>
                            <input type="file" id="photo" />
                        </div>
                        <div>
                            <button type="button" id="cancelButton">Cancel</button>
                            <button type="submit" id="saveButton">Save</button>
                        </div>
                    </div>
                </form>
            </div>
            <script src="index.js"></script>
        </div>
    );
}

export default CarUploadPage;
