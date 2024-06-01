import React from 'react';
import '../styles/style_main_results.css';

function DetailedInfo() {
    return (
        <div>
            <nav className="top-nav">
                <li><a href="main.html"><img className="logo" src="img/logo+name.png" alt="logo" /></a></li>
                <div className="navbar">
                    <li className="upload-button"><a href="car_upload_page.html">Upload my vehicle</a></li>
                    <li><a href="gloria_public/signin.html">Log-In</a></li>
                </div>
            </nav>

            <header>
                <div className="image-grid">
                    <img className="image-grid-col-2 image-grid-row-2" src="img/car-picture.png" alt="architecture" />
                    <img src="img/car-picture-1.5.png" alt="car-picture-1.5" />
                    <img src="img/car-picture-2.png" alt="car-picture-2" />
                    <img src="img/car-picture-3.png" alt="car-picture-3" />
                    <img src="img/car-picture-4.png" alt="car-picture-4" />
                </div>
            </header>

            <main>
                <div className="info-payment-column">
                    <div>
                        <section className="container">
                            <div className="vehicle-info">
                                <h1>Tesla Model 3 2023</h1>
                                <p>Bellevue, WA</p>
                                <p className="rating">★ 4.97</p>
                            </div>
                            <div className="separate"></div>
                            <div className="profile-info">
                                <img src="img/ariel-profile.png" alt="profile image" />
                                <div className="text">
                                    <p className="profile-name">Owned by Ariel</p>
                                    <p className="hosting">Hosting for 4 years</p>
                                </div>
                            </div>
                            <div className="separate"></div>
                        </section>

                        <div className="title-section result">
                            <h2>Reviews</h2>
                        </div>

                        <section className="review-container">
                            <div className="carousel-container review-cards">
                                <div className="review-card">
                                    <img src="img/drake-profile.png" alt="profile image" />
                                    <div className="text">
                                        <div className="review-header">
                                            <p className="reviewee">Drake</p>
                                            <p className="when">1 week ago</p>
                                        </div>
                                        <p className="rates">★★★★★</p>
                                        <p className="comment">Owner was easy to communicate with, when I was visiting Washington. The car was also family friendly good with three toddlers and two adults.</p>
                                    </div>
                                </div>

                                <div className="review-card">
                                    <img src="img/drake-profile.png" alt="profile image" />
                                    <div className="text">
                                        <div className="review-header">
                                            <p className="reviewee">Drake</p>
                                            <p className="when">1 week ago</p>
                                        </div>
                                        <p className="rates">★★★★★</p>
                                        <p className="comment">Owner was easy to communicate with, when I was visiting Washington. The car was also family friendly good with three toddlers and two adults.</p>
                                    </div>
                                </div>
                                <div className="review-card">
                                    <img src="img/drake-profile.png" alt="profile image" />
                                    <div className="text">
                                        <div className="review-header">
                                            <p className="reviewee">Drake</p>
                                            <p className="when">1 week ago</p>
                                        </div>
                                        <p className="rates">★★★★★</p>
                                        <p className="comment">Owner was easy to communicate with, when I was visiting Washington. The car was also family friendly good with three toddlers and two adults.</p>
                                    </div>
                                </div>
                                <div className="review-card">
                                    <img src="img/drake-profile.png" alt="profile image" />
                                    <div className="text">
                                        <div className="review-header">
                                            <p className="reviewee">Drake</p>
                                            <p className="when">1 week ago</p>
                                        </div>
                                        <p className="rates">★★★★★</p>
                                        <p className="comment">Owner was easy to communicate with, when I was visiting Washington. The car was also family friendly good with three toddlers and two adults.</p>
                                    </div>
                                </div>
                                <div className="review-card">
                                    <img src="img/drake-profile.png" alt="profile image" />
                                    <div className="text">
                                        <div className="review-header">
                                            <p className="reviewee">Drake</p>
                                            <p className="when">1 week ago</p>
                                        </div>
                                        <p className="rates">★★★★★</p>
                                        <p className="comment">Owner was easy to communicate with, when I was visiting Washington. The car was also family friendly good with three toddlers and two adults.</p>
                                    </div>
                                </div>
                            </div>
                            <script src="carousel.js"></script>
                        </section>
                    </div>
                    <section className="payment-container">
                        <div className="serviceCard">
                            <div className="cardContent">
                                <p className="cost">$55/day</p>
                                <p className="date">May 3 - May 6</p>
                                <div className="centerButton">
                                    <button className="rent-button">Rent</button>
                                </div>
                                <div className="group-column">
                                    <p className="cost-day">$55 x 3 days</p>
                                    <p>$165</p>
                                </div>
                                <div className="group-column">
                                    <p className="charge-cost">Charging cost</p>
                                    <p>$0.05 per mile</p>
                                </div>
                                <hr />
                                <div className="group-column-top">
                                    <p className="total-cost">Total</p>
                                    <p>$170</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="comment">
                    <div className="review-box">
                        <div className="stars">
                            <span className="star" data-value="1">&#9734;</span>
                            <span className="star" data-value="2">&#9734;</span>
                            <span className="star" data-value="3">&#9734;</span>
                            <span className="star" data-value="4">&#9734;</span>
                            <span className="star" data-value="5">&#9734;</span>
                        </div>
                        <div className="textarea-container">
                            <textarea placeholder="Type reviews..."></textarea>
                            <button className="review-button" type="submit">Upload</button>
                        </div>
                    </div>
                    <script src="review-star.js"></script>
                </section>
            </main>

            <footer className="footer">
                <a href="main.html"><img className="logo" src="img/logo+name.png" alt="logo" /></a>
                <a href="about-us.html"><p className="link">About Us</p></a>
                <a href="faq.html"><p className="link">Frequently Asked Questions</p></a>
                <a href="contact-us.html"><p className="link">Contact Us</p></a>
                <a href="customer-support.html"><p className="link">Customer Support</p></a>
                <p className="copyright">&copy; 2024 Wheely</p>
            </footer>
        </div>
    );
}

export default DetailedInfo;
