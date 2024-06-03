import React, { useEffect, useState, useRef } from 'react';
import 'normalize.css';
import '../styles/style_main_results.css';
import { getData } from '../scripts/firebase/getData';

function MainPage() {
    const [carModels, setCarModels] = useState([]);
    const [carListings, setCarListings] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const fetchCarModels = async () => {
            let cars = await getData("cars");
            setCarModels(cars);
        };
        const fetchListings = async () => {
            let listing = await getData("listings");
            setCarListings(listing);
        };

        fetchCarModels();
        fetchListings();
    }, []);

    if (carModels.length === 0) {
        return <div>Loading...</div>;
    }

    const scrollLeft = () => {
        containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="whole">
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
                                    <input className="search-input search-field" type="text" placeholder="Type city here..." aria-label="Location" id="location" />
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
            <main>
                <div className="container">
                    <section className="column-1">
                        <h1>Recommendation</h1>
                    </section>
                    <section className="column-2">
                        <img id="left-arrow" className="arrow left-arrow" src={require("../img/left-arrow.png")} alt="left next" onClick={scrollLeft} />
                        <div className="section-2-container" ref={containerRef}>
                            {carModels.slice(0, 6).map((car, index) => (
                                <div className="card" key={index}>
                                    <i className="fa fa-heart heart-icon"></i>
                                    <img src={require("../img/car-picture.png")} alt="A picture of car" />
                                    <p className="vehicle">{car.car_model || "No model available"}</p>
                                    <p className="rate">★4.97</p>
                                    <p className="location">Bellevue, WA</p>
                                    <p className="price">$55/day</p>
                                    <input type="checkbox" id={`heart-btn-${index}`} className="heart-btn" />
                                    <label htmlFor={`heart-btn-${index}`} className="heart-icon"></label>
                                </div>
                            ))}
                        </div>
                        <img id="right-arrow" className="arrow right-arrow" src={require("../img/right-arrow.png")} alt="right next" onClick={scrollRight} />
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
        </div>
    );
}

export default MainPage;
