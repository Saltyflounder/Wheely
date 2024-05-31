// firebase.js

// Initialize Firebase
const database = firebase.database();

// Function to fetch data from Firebase
function fetchData() {
  database.ref('/').once('value').then((snapshot) => {
    const data = snapshot.val();
    displayData(data);
  }).catch((error) => {
    console.error("Error fetching data: ", error);
  });
}

// Function to display data on the web page
function displayData(data) {
  const container = document.querySelector('.section-2-container');
  container.innerHTML = ''; // Clear existing content

  if (data && data[1] && data[1][0]) {
    data[1][0].forEach(car => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <i class="fa fa-heart heart-icon"></i>
        <img src="img/car-picture.png" alt="A picture of car">
        <p class="vehicle">${car.car_make} ${car.car_model} ${car.car_year}</p>
        <p class="rate">★${car.car_rating}</p>
        <p class="location">${car.parking_city}, ${car.parking_state}</p>
        <p class="price">$${car.car_price_per_day}/day</p>
        <input type="checkbox" id="heart-btn-${car.id}" class="heart-btn">
        <label for="heart-btn-${car.id}" class="heart-icon"></label>
      `;

      container.appendChild(card);
    });
  } else {
    container.innerHTML = '<p>No data available</p>';
  }
}

// Fetch data when the page loads
document.addEventListener('DOMContentLoaded', fetchData);

