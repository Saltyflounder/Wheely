import React from 'react';
import '../styles/style.css';

function Verification() {
    return (
        <div>
            <div className="top-bar">
                <div className="logo">Wheely</div>
                <a href="#" className="upload-link">Upload my vehicle</a>
                <div className="profile-icon"></div>
            </div>
            <div className="container">
                <div className="form-container">
                    <h2>Sign-up</h2>
                    <form id="verification-form">
                        <input type="tel" id="phone-number" placeholder="Phone number" required />
                        <input type="text" id="license-id" placeholder="Driver's license ID #" required />
                        <label htmlFor="license-photo">Driver's license photo</label>
                        <input type="file" id="license-photo" accept="image/*" required />
                        <label htmlFor="profile-image">Profile image</label>
                        <input type="file" id="profile-image" accept="image/*" required />
                        <button type="submit">Sign-up</button>
                    </form>
                </div>
            </div>
            <script src="../scripts/scripts.js"></script>
        </div>
    );
}

export default Verification;
