// let leftArrow = document.querySelector('.left-arrow');
// let rightArrow = document.querySelector('.right-arrow');
// let carouselSlider1 = document.querySelector('.carousel-slider');
// let touchStartX = 0;
// let touchEndX = 0;

// carouselSlider1.addEventListener('touchstart', swipe1);

// carouselSlider1.addEventListener('touchend', swipe2);

// function swipe1(e) {
//     touchStartX = e.changedTouches[0].screenX;
// }

// function swipe2(e) {
//     touchEndX = e.changedTouches[0].screenX;
//     checkDirection();
// }

// function checkDirection() {
//     if (touchEndX - touchStartX < -40) {
//         console.log('Swiped Left!');
//         let carouselSlider = document.querySelector('.carousel-slider');
//         let swipeLength = touchEndX - touchStartX;
//         carouselSlider.style.transform = "translateX(-10%)";
//     }
//     if (touchEndX - touchStartX > 40) {
//         console.log('Swiped Right!');
//         let carouselSlider = document.querySelector('.carousel-slider');
//         let swipeLength = touchEndX - touchStartX;
//         carouselSlider.style.transform = "translateX(10%)";
//     }
// }

const slider1 = document.querySelector('.carousel-container');

let isDown = false;
let startX;
let scrollLeft;

slider1.addEventListener('mousedown', (e) => {
    console.log('mousedown function triggered');
    isDown = true;
    slider1.classList.add('active');
    startX = e.pageX - slider1.offsetLeft;
    scrollLeft = slider1.scrollLeft;
})
slider1.addEventListener('mouseleave', () => {
    console.log('mouseleave function triggered');
    isDown = false;
    slider1.classList.remove('active');
})
slider1.addEventListener('mouseup', () => {
    console.log('mouseup function triggered');
    isDown = false;
    slider1.classList.remove('active');
})
slider1.addEventListener('mousemove', (e) => {
    if (!isDown) return; //stop the fn from running
    console.log('mousemove function triggered');
    e.preventDefault();
    const x = e.pageX - slider1.offsetLeft;
    const walk = (x - startX) * 3;
    slider1.scrollLeft = scrollLeft - walk;
})