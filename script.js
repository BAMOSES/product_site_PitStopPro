document.querySelector('.next').addEventListener('click', function() {
    changeSlide(1);
});
document.querySelector('.prev').addEventListener('click', function() {
    changeSlide(-1);
});

function changeSlide(direction, carouselId) {
    let carousel = document.getElementById(carouselId);
    let items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
    items[currentIndex].classList.remove('active');
    let nextIndex = (currentIndex + direction + items.length) % items.length;
    items[nextIndex].classList.add('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll('h2[id^="animated-header"]'); // Select all h2 elements with IDs starting with 'animated-header'
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Add 'animate' class to start the animation
                observer.unobserve(entry.target); // Optional: stop observing if you want the animation to occur only once
            }
        });
    }, {
        threshold: 0.5 // Adjust if necessary to trigger the animation sooner or later as the element comes into view
    });

    headers.forEach(header => observer.observe(header)); // Start observing each header
});

