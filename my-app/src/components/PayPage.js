import React from 'react';
import '../styles/paypage.css';

function PayPage() {
    return (
        <div>
            <nav className="top-nav">
                <li><a href="main.html"><img className="logo" src="img/logo+name.png" alt="logo" /></a></li>
                <div className="navbar">
                    <li className="menu-button"><a href="menu.html">Menu</a></li>
                    <li><a href="#"><img className="pfp" src="img/pfp.png" alt="profile icon" /></a></li>
                </div>
            </nav>

            <div className="container">
                <div className="payment-section">
                    <h2>Payment Information</h2>
                    <div className="payment-icons">
                        <img src="img/visa.png" alt="Visa" />
                        <img src="img/mastercard.png" alt="MasterCard" />
                        <img src="img/paypal.png" alt="PayPal" />
                        <img src="img/discover.png" alt="Discover" />
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Your Name on Card</label>
                            <input type="text" id="name" name="name" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="card-number">Card Number</label>
                            <input type="text" id="card-number" name="card-number" placeholder="XXX - XXX - XXX" />
                        </div>
                        <div className="form-group-inline">
                            <div className="form-group">
                                <label htmlFor="expiration-date">Expiration Date</label>
                                <input type="text" id="expiration-date" name="expiration-date" placeholder="MM / YYYY" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" id="cvv" name="cvv" placeholder="123" />
                            </div>
                        </div>
                        <div className="form-group-inline">
                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text" id="address" name="address" placeholder="Street address, State" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="zip-code">Zip Code</label>
                                <input type="text" id="zip-code" name="zip-code" placeholder="Zip Code" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="button" className="apple-pay-btn">Pay with <img src="img/apple-pay.jpeg" alt="Apple Pay" /></button>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="confirm-btn">Confirm Payment</button>
                        </div>
                    </form>
                </div>

                <div className="booking-section">
                    <h2>Booking Information</h2>
                    <div className="booking-info">
                        <h3>Tesla Model 3 2023</h3>
                        <p>Bellevue, WA</p>
                        <img src="img/tesla.png" alt="Tesla Model 3" />
                        <div className="pick-up-return-container">
                            <div className="pick-up-return">
                                <label>
                                    <input type="radio" name="pickup-return" value="pickup" checked /> Pick Up
                                </label>
                                <label>
                                    <input type="radio" name="pickup-return" value="return" /> Return
                                </label>
                            </div>
                            <div className="date-info">
                                <p className="pick-up-date">05/02/2024 11:30AM</p>
                                <p className="return-date">05/12/2024 11:30AM</p>
                            </div>
                        </div>
                    </div>
                    <div className="payment-details">
                        <h2>Payment Details</h2>
                        <div className="payment-item">
                            <span className="label">Subtotal:</span>
                            <span className="value">$500</span>
                        </div>
                        <div className="payment-item">
                            <span className="label">Tax:</span>
                            <span className="value">$0</span>
                        </div>
                        <div className="payment-item total">
                            <span className="label">Total:</span>
                            <span className="value">$500</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PayPage;
