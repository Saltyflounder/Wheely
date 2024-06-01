document.addEventListener("DOMContentLoaded", () => {
    fetch(data.json)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data fetched successfully:', data);
            const cardsContainer = document.getElementById('recommendation-cards');
            if (!cardsContainer) {
                console.error('Cards container not found');
                return;
            }

            data.cars.forEach(car => {
                const card = document.createElement('div');
                card.classList.add('card');

                const heartIcon = document.createElement('i');
                heartIcon.classList.add('fa', 'fa-heart', 'heart-icon');
                card.appendChild(heartIcon);

                const img = document.createElement('img');
                img.src = car.image || 'img/car-picture.png'; // Use default image if not provided
                img.alt = `A picture of ${car.car_make} ${car.car_model}`;
                card.appendChild(img);

                const vehicle = document.createElement('p');
                vehicle.classList.add('vehicle');
                vehicle.textContent = `${car.car_make} ${car.car_model} ${car.car_year}`;
                card.appendChild(vehicle);

                const rate = document.createElement('p');
                rate.classList.add('rate');
                rate.textContent = `★${car.car_rating.toFixed(2)}`;
                card.appendChild(rate);

                const location = document.createElement('p');
                location.classList.add('location');
                location.textContent = `${car.parking_city}, ${car.parking_state}`;
                card.appendChild(location);

                const price = document.createElement('p');
                price.classList.add('price');
                price.textContent = `$${car.car_price_per_day}/day`;
                card.appendChild(price);

                const heartBtn = document.createElement('input');
                heartBtn.type = 'checkbox';
                heartBtn.id = `heart-btn-${car.car_id}`;
                heartBtn.classList.add('heart-btn');
                card.appendChild(heartBtn);

                const heartLabel = document.createElement('label');
                heartLabel.htmlFor = `heart-btn-${car.car_id}`;
                heartLabel.classList.add('heart-icon');
                card.appendChild(heartLabel);

                cardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
