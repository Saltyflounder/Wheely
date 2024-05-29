document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const cardContainer = document.querySelector('.section-2-container');
    const cards = document.querySelectorAll('.card');

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 20; // Adjust based on your card margin/padding

    rightArrow.addEventListener('click', function() {
        if (currentIndex < cards.length - 3) {
            currentIndex++;
            cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });

    leftArrow.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            cardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }
    });
});
