import React from 'react';
import '../styles/signin.css';

function SignIn() {
    return (
        <div>
            <div className="top-bar">
                <div className="logo">Wheely</div>
                <a href="#" className="upload-link">Upload my vehicle</a>
                <div className="profile-icon"></div>
            </div>
            <div className="container">
                <div className="form-container">
                    <h2>Log-in</h2>
                    <form id="login-form">
                        <input type="email" id="email" placeholder="Email" required />
                        <input type="password" id="password" placeholder="Password" required />
                        <button type="submit">Log-in</button>
                        <button type="button" className="google-btn">Continue with Google</button>
                        <button type="button" className="apple-btn">Continue with Apple</button>
                        <p>Do not have account? <a href="../public/signup.html">Click here to sign-up</a></p>
                    </form>
                </div>
            </div>
            <script src="scripts.js"></script>
        </div>
    );
}

export default SignIn;
