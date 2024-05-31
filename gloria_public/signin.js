document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful', data);
                // Store the token and redirect to a protected page
                localStorage.setItem('token', data.token);
                window.location.href = '/dashboard.html'; // Example redirection
            } else {
                console.error('Login failed', data);
                alert(data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    });

    document.querySelector('.google-btn').addEventListener('click', () => {
        // Handle Google login
        console.log('Google login clicked');
        // You will need to integrate Google OAuth for actual implementation
    });

    document.querySelector('.apple-btn').addEventListener('click', () => {
        // Handle Apple login
        console.log('Apple login clicked');
        // You will need to integrate Apple OAuth for actual implementation
    });
});
