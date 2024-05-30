document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const phoneNumber = document.getElementById('phoneNumber').value;
        const driversLicenseId = document.getElementById('driversLicenseId').value;
        const driversLicensePhoto = document.getElementById('driversLicensePhoto').files[0];
        const profileImage = document.getElementById('profileImage').files[0];

        // Simple validation
        if (!phoneNumber || !driversLicenseId || !driversLicensePhoto || !profileImage) {
            alert('All fields are required!');
            return;
        }

        // Example of handling file upload
        const formData = new FormData();
        formData.append('phoneNumber', phoneNumber);
        formData.append('driversLicenseId', driversLicenseId);
        formData.append('driversLicensePhoto', driversLicensePhoto);
        formData.append('profileImage', profileImage);

        console.log('Form submitted', formData);

        // Example using Fetch API to send data to a server
        /*
        fetch('https://yourserver.com/api/signup', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Redirect to another page or show a success message
        })
        .catch(error => {
            console.error('Error:', error);
            // Show an error message to the user
        });
        */
    });
});
