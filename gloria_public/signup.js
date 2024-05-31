document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const userName = document.getElementById('userName').value;
        const password = document.getElementById('password').value;

        // Simple validation (more sophisticated validation can be added)
        if (!firstName || !lastName || !email || !userName || !password) {
            alert('All fields are required!');
            return;
        }

        // Example of sending data to a server
        // This requires a server endpoint to handle the request
        const data = {
            firstName,
            lastName,
            email,
            userName,
            password
        };

        console.log('Form submitted', data);

        // Example using Fetch API to send data to a server
        /*
        fetch('https://yourserver.com/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
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
