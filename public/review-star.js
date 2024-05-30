document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            resetStars();
            highlightStars(value);
        });
    });
});

function resetStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.innerHTML = '&#9734;';
        star.style.color = 'gray';
    });
}

function highlightStars(value) {
    const stars = document.querySelectorAll('.star');
    for (let i = 0; i < value; i++) {
        stars[i].innerHTML = '&#9733;';
        stars[i].style.color = 'rgb(255, 215, 39)';
    }
}
