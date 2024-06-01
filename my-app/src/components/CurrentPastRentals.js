import React from 'react';
import '../styles/style.css';
import '../styles/cur_past_style.css';

function CurrentPastRentals() {
    return (
        <div>
            <nav className="top-nav">
                <li><a href="index.html"><img className="logo" src="../img/logo+name.png" alt="logo" /></a></li>
                <div className="navbar">
                    <li className="upload-button"><a href="event.html">Upload my vehicle</a></li>
                    <li><a href="#">Log-In</a></li>
                </div>
            </nav>

            <div className="side-bar">
                <h1>Filters</h1>
                <div className="inside-bar">
                    <h3>Rental Type</h3>
                    <div className="option">
                        <input type="checkbox" />
                        <label>Rented</label>
                    </div>
                    <div className="option">
                        <input type="checkbox" />
                        <label>Rented Out</label>
                    </div>
                    <h3>Vehicle Type</h3>
                    <div className="option">
                        <input type="checkbox" />
                        <label>Sedan</label>
                    </div>
                    <div className="option">
                        <input type="checkbox" />
                        <label>Van</label>
                    </div>
                    <div className="option">
                        <input type="checkbox" />
                        <label>Sports</label>
                    </div>
                    <div className="option">
                        <input type="checkbox" />
                        <label>Jeep</label>
                    </div>
                    <div className="option">
                        <input type="checkbox" />
                        <label>Other</label>
                    </div>
                    <h3>Rental Date</h3>
                    <div className="option">
                        <input type="checkbox" />
                        <label>Last 30 Days</label>
                    </div>
                    <div className="option">
                        <input type="checkbox" />
                        <label>Last 90 Days</label>
                    </div>
                    <div className="option">
                        <input type="checkbox" />
                        <label>Last Year</label>
                    </div>
                    <div className="option">
                        <input type="checkbox" />
                        <label>Any:</label>
                        <input type="text" id="user-input-form" />
                        <label> Days</label>
                    </div>
                    <h3>Price</h3>
                    <div className="slider">
                        <hr />
                        <p style={{ float: 'left' }}>$0/day</p>
                        <p style={{ float: 'right' }}>$100/day</p>
                    </div>
                </div>
            </div>

            <main>
                <div className="main-title">
                    <h1>View Rentals</h1>
                </div>

                <section className="cards-section">
                    <div className="main-content">
                        <div className="carousel-container">
                            <div className="carousel-wrapper car-container">
                                <div className="carousel-slide div1">
                                    <img src="../img/car-picture.png" alt="A picture of car" />
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

                                <div className="carousel-slide div2">
                                    <img src="../img/car-picture.png" alt="A picture of car" />
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

                                <div className="carousel-slide div3">
                                    <img src="../img/car-picture.png" alt="A picture of car" />
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

                                <div className="carousel-slide div4">
                                    <img src="../img/car-picture.png" alt="A picture of car" />
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

                                <div className="carousel-slide div5">
                                    <img src="../img/car-picture.png" alt="A picture of car" />
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
                                <div className="carousel-slide div6">
                                    <img src="../img/car-picture.png" alt="A picture of car" />
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

                                <div className="carousel-slide div7">
                                    <img src="../img/car-picture.png" alt="A picture of car" />
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

                                <div className="carousel-slide div8">
                                    <img src="../img/car-picture.png" alt="A picture of car" />
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

                                <div className="carousel-slide div9">
                                    <img src="../img/car-picture.png" alt="A picture of car" />
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
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default CurrentPastRentals;
