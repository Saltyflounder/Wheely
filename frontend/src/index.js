document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const verificationForm = document.getElementById('verification-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add your login logic here
            console.log('Logging in with', {
                email: loginForm.email.value,
                password: loginForm.password.value
            });
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add your signup logic here
            console.log('Signing up with', {
                firstName: signupForm['first-name'].value,
                lastName: signupForm['last-name'].value,
                email: signupForm.email.value,
                username: signupForm.username.value,
                password: signupForm.password.value
            });
        });
    }

    if (verificationForm) {
        verificationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Add your verification logic here
            console.log('Verifying with', {
                phoneNumber: verificationForm['phone-number'].value,
                licenseId: verificationForm['license-id'].value,
                licensePhoto: verificationForm['license-photo'].files[0],
                profileImage: verificationForm['profile-image'].files[0]
            });
        });
    }
});
