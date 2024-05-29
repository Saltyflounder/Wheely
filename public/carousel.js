document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    let isDown = false;
    let startY;
    let scrollTop;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startY = e.pageY - carousel.offsetTop;
        scrollTop = carousel.scrollTop;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const y = e.pageY - carousel.offsetTop;
        const walk = (y - startY) * 3; //scroll-fast
        carousel.scrollTop = scrollTop - walk;
    });
});
