import React from 'react';
import '../styles/style.css';

function SignUp() {
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
                    <form id="signup-form">
                        <input type="text" id="first-name" placeholder="First name" required />
                        <input type="text" id="last-name" placeholder="Last name" required />
                        <input type="email" id="email" placeholder="Email" required />
                        <input type="text" id="username" placeholder="User name" required />
                        <input type="password" id="password" placeholder="Password" required />
                        <button type="submit">Sign-up</button>
                    </form>
                </div>
            </div>
            <script src="scripts.js"></script>
        </div>
    );
}

export default SignUp;
