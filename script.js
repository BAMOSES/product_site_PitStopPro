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
    const headers = document.querySelectorAll('h2[id^="animated-header"]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    headers.forEach(header => observer.observe(header));
});


window.onload = () => {
    window.addEventListener('scroll', function() {
        var element = document.querySelector('.fixed-element');
        var headerHeight = document.querySelector('header').offsetHeight;
        var content = document.querySelector('.content');
        var scrollTop = window.scrollY;
    
        var fixedPoint = headerHeight + content.offsetTop;
    
        if (scrollTop > fixedPoint) {
            element.classList.add('fixed');
        } else {
            element.classList.remove('fixed');
        }
    });
}