document.addEventListener('DOMContentLoaded', function () {
    // Function to populate year dropdown with years from 1887 to current year
    function populateYearDropdown() {
        const currentYear = new Date().getFullYear();
        const yearDropdown = document.getElementById('yearDropdown');
        for (let year = currentYear; year >= 1887; year--) {
            const option = document.createElement('option');
            option.text = year;
            option.value = year;
            yearDropdown.appendChild(option);
        }
    }

    // Function to populate make dropdown with all types of makes (dummy data)
    function populateMakeDropdown() {
        const makeDropdown = document.getElementById('makeDropdown');
        const makes = ['Audi', 'BMW', 'Ford', 'Honda', 'Toyota', 'Tesla', 'Volkswagen', 'Volvo']; // Dummy data
        makes.forEach(make => {
            const option = document.createElement('option');
            option.text = make;
            option.value = make;
            makeDropdown.appendChild(option);
        });
    }

    // Function to populate odometer dropdown
    function populateOdometerDropdown() {
        const odometerDropdown = document.getElementById('odometerDropdown');
        for (let i = 0; i <= 300000; i += 5000) {
            const option = document.createElement('option');
            option.text = i.toLocaleString();
            option.value = i;
            odometerDropdown.appendChild(option);
        }
    }

    // Validate and submit form
    document.getElementById('carUploadForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
        // Validation logic goes here
        const form = event.target;
        const elements = form.elements;
        let isValid = true;
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            if (element.required && !element.value.trim()) {
                isValid = false;
                element.style.borderColor = 'red';
                // Shake animation for required fields
                element.classList.add('shake');
                setTimeout(() => {
                    element.classList.remove('shake');
                }, 500);
            }
        }
        if (isValid) {
            // If form is valid, save data to dataset (dummy action)
            const formData = new FormData(form);
            // Dummy action to save data
            console.log('Form submitted with data:', formData);
            alert('Car information saved successfully!');
        } else {
            alert('Please fill in all required fields.');
        }
    });

    // Event listener for cancel button
    document.getElementById('cancelButton').addEventListener('click', function () {
        // Redirect or perform other cancel action
        alert('Operation canceled.');
    });

    // Initialize dropdowns
    populateYearDropdown();
    populateMakeDropdown();
    populateOdometerDropdown();
});
