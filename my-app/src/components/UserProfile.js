import React from 'react';
import '../styles/userprofile.css';

function UserProfile() {
    return (
        <div>
            <nav className="top-nav">
                <li><a href="index.html"><img className="logo" src={require("../img/logo+name.png")} alt="logo" /></a></li>
                <div className="navbar">
                    <li className="menu-button"><a href="menu.html">Menu</a></li>
                    <li><a href="#"><img className="pfp" src={require("../img/pfp.png")} alt="profile icon" /></a></li>
                </div>
            </nav>

            <div className="container">
                <div className="profile-section">
                    <div className="profile-header">
                        <img src={require("../img/pfp.png")} alt="Profile Picture" />
                        <div>
                            <h2>Gloria Du
                                <span>Verified
                                    <span className="check-mark" style={{ color: '#1D2B44', fontSize: 'medium', marginRight: '10px', marginLeft: '0px' }}>✔</span>
                                    Joined since 5/10/2024
                                </span>
                            </h2>
                        </div>
                        <button>Edit Profile</button>
                    </div>
                </div>

                <div className="profile-info">
                    <div className="title">
                        <h3>Profile Information</h3>
                    </div>

                    <form>
                        <div>
                            <label htmlFor="first-name">First Name *</label>
                            <input type="text" id="first-name" name="first-name" value="Gloria" />
                        </div>
                        <div>
                            <label htmlFor="last-name">Last Name *</label>
                            <input type="text" id="last-name" name="last-name" value="Du" />
                        </div>
                        <div>
                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" value="gloriadu@uw.edu" />
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number *</label>
                            <input type="text" id="phone" name="phone" value="000-000-0000" />
                        </div>
                        <div>
                            <label htmlFor="password">Password *</label>
                            <input type="password" id="password" name="password" value="********0000" />
                        </div>
                        <div>
                            <label htmlFor="license">Driver's License</label>
                            <input type="file" id="license" name="license" />
                            <label htmlFor="license" className="upload-btn">Upload here...</label>
                        </div>
                        <div style={{ width: '100%' }}>
                            <button type="button" className="cancel">Cancel</button>
                            <button type="submit">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
