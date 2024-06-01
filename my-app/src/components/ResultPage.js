import React from 'react';
import '../styles/style_main_results.css';
// import 'normalize.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function ResultPage() {
    return (
        <div>
            <nav className="top-nav">
                <li><a href="main.html"><img className="logo" src={require("../img/logo+name.png")} alt="logo" /></a></li>
                <div className="navbar">
                    <li className="upload-button"><a href="car_upload_page.html">Upload my vehicle</a></li>
                    <li><a href="gloria_public/signin.html">Log-In</a></li>
                </div>
            </nav>
            <header>
                <div className="motto">
                    <div className="searchbar">
                        <div className="search-container">
                            <div className="search-inputs">
                                <div className="input-group">
                                    <label htmlFor="location">Where</label>
                                    <input className="search-input search-field" type="text" placeholder="City, address, hotel, etc." aria-label="Location" id="location" />
                                </div>
                                <div className="separator"></div>
                                <div className="input-group">
                                    <label>From</label>
                                    <input className="search-input search-field" type="date" aria-label="Start Date" />
                                    <input className="search-input search-field" type="time" aria-label="Start Time" step="900" />
                                </div>
                                <div className="separator"></div>
                                <div className="input-group">
                                    <label>Until</label>
                                    <input className="search-input search-field" type="date" aria-label="End Date" />
                                    <input className="search-input search-field" type="time" aria-label="End Time" step="900" />
                                </div>
                                <button className="search-button" type="submit">Search</button>
                            </div>
                            <div className="vehicle-icons">
                                <input type="radio" name="vehicle" id="sedan" value="sedan" />
                                <label htmlFor="sedan"><img src={require("../img/sedan.png")} alt="Sedan" /></label>
                                <input type="radio" name="vehicle" id="suv" value="suv" />
                                <label htmlFor="suv"><img src={require("../img/suv.png")} alt="SUV" /></label>
                                <input type="radio" name="vehicle" id="van" value="van" />
                                <label htmlFor="van"><img src={require("../img/van.png")} alt="Van" /></label>
                                <input type="radio" name="vehicle" id="sports" value="sports" />
                                <label htmlFor="sports"><img src={require("../img/sports.png")} alt="Sports car" /></label>
                                <input type="radio" name="vehicle" id="jeep" value="jeep" />
                                <label htmlFor="jeep"><img src={require("../img/jeep.png")} alt="Jeep" /></label>
                                <input type="radio" name="vehicle" id="electric" value="electric" />
                                <label htmlFor="electric"><img src={require("../img/electric.png")} alt="Electric car" /></label>
                                <input type="radio" name="vehicle" id="truck" value="truck" />
                                <label htmlFor="truck"><img src={require("../img/truck.png")} alt="Truck" /></label>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="resultss">
                <div className="car-results">
                    <section className="title-section result">
                        <h1>Results</h1>
                    </section>
                    <section className="cards-section">
                        <div className="main-content">
                            <div className="carousel-container">
                                <div className="carousel-wrapper">
                                    <div className="carousel-slide">
                                        <img src={require("../img/car-picture.png")} alt="A picture of car" />
                                        <div className="card-content">
                                            <p className="vehicle">Tesla Model 3 2023</p>
                                            <div className="details">
                                                <p className="rate">★4.97</p>
                                                <p className="location">Bellevue, WA</p>
                                            </div>
                                            <p className="price">$55/day</p>
                                        </div>
                                        <input type="checkbox" id="heart-btn-1" className="heart-btn" />
                                        <label htmlFor="heart-btn-1" className="heart-icon"></label>
                                    </div>
                                    <div className="carousel-slide">
                                        <img src={require("../img/car-picture.png")} alt="A picture of car" />
                                        <div className="card-content">
                                            <p className="vehicle">Tesla Model 3 2023</p>
                                            <div className="details">
                                                <p className="rate">★4.97</p>
                                                <p className="location">Bellevue, WA</p>
                                            </div>
                                            <p className="price">$55/day</p>
                                        </div>
                                        <input type="checkbox" id="heart-btn-2" className="heart-btn" />
                                        <label htmlFor="heart-btn-2" className="heart-icon"></label>
                                    </div>
                                    <div className="carousel-slide">
                                        <img src={require("../img/car-picture.png")} alt="A picture of car" />
                                        <div className="card-content">
                                            <p className="vehicle">Tesla Model 3 2023</p>
                                            <div className="details">
                                                <p className="rate">★4.97</p>
                                                <p className="location">Bellevue, WA</p>
                                            </div>
                                            <p className="price">$55/day</p>
                                        </div>
                                        <input type="checkbox" id="heart-btn-3" className="heart-btn" />
                                        <label htmlFor="heart-btn-3" className="heart-icon"></label>
                                    </div>
                                    <div className="carousel-slide">
                                        <img src={require("../img/car-picture.png")} alt="A picture of car" />
                                        <div className="card-content">
                                            <p className="vehicle">Tesla Model 3 2023</p>
                                            <div className="details">
                                                <p className="rate">★4.97</p>
                                                <p className="location">Bellevue, WA</p>
                                            </div>
                                            <p className="price">$55/day</p>
                                        </div>
                                        <input type="checkbox" id="heart-btn-4" className="heart-btn" />
                                        <label htmlFor="heart-btn-4" className="heart-icon"></label>
                                    </div>
                                    <div className="carousel-slide">
                                        <img src={require("../img/car-picture.png")} alt="A picture of car" />
                                        <div className="card-content">
                                            <p className="vehicle">Tesla Model 3 2023</p>
                                            <div className="details">
                                                <p className="rate">★4.97</p>
                                                <p className="location">Bellevue, WA</p>
                                            </div>
                                            <p className="price">$55/day</p>
                                        </div>
                                        <input type="checkbox" id="heart-btn-5" className="heart-btn" />
                                        <label htmlFor="heart-btn-5" className="heart-icon"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer className="footer">
                <a href="main.html"><img className="logo" src={require("../img/logo+name.png")} alt="logo" /></a>
                <a href="about-us.html"><p className="link">About Us</p></a>
                <a href="faq.html"><p className="link">Frequently Asked Questions</p></a>
                <a href="contact-us.html"><p className="link">Contact Us</p></a>
                <a href="customer-support.html"><p className="link">Customer Support</p></a>
                <p className="copyright">&copy; 2024 Wheely</p>
            </footer>
            <script src="carousel.js"></script>
        </div>
    );
}

export default ResultPage;
