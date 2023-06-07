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
//         carouselSlider.style.transform = "translateX(" + swipeLength + "px)";
//     }
//     if (touchEndX - touchStartX > 40) {
//         console.log('Swiped Right!');
//         let carouselSlider = document.querySelector('.carousel-slider');
//         let swipeLength = touchEndX - touchStartX;
//         carouselSlider.style.transform = "translateX(" + swipeLength + "px)";
//     }
// }

// const slider1 = document.querySelector('.carousel-container');

// let isDown = false;
// let startX;
// let scrollLeft;

// slider1.addEventListener('mousedown', (e) => {
//     console.log('mousedown function triggered');
//     isDown = true;
//     slider1.classList.add('active');
//     startX = e.pageX - slider1.offsetLeft;
//     scrollLeft = slider1.scrollLeft;
// })
// slider1.addEventListener('mouseleave', () => {
//     console.log('mouseleave function triggered');
//     isDown = false;
//     slider1.classList.remove('active');
// })
// slider1.addEventListener('mouseup', () => {
//     console.log('mouseup function triggered');
//     isDown = false;
//     slider1.classList.remove('active');
// })
// slider1.addEventListener('mousemove', (e) => {
//     if (!isDown) return; //stop the fn from running
//     console.log('mousemove function triggered');
//     e.preventDefault();
//     const x = e.pageX - slider1.offsetLeft;
//     const walk = (x - startX) * 3;
//     slider1.scrollLeft = scrollLeft - walk;
// })

let carousel1 = document.querySelector('.carousel-container');
let isDragStart = false;
let prevPageX;
let prevScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel1.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    console.log(positionDiff);
    carousel1.scrollLeft = (prevScrollLeft - positionDiff);
    if (positionDiff > 0) {
        carousel1.scrollBy({
            top: 0,
            left: positionDiff * -1,
            behavior: 'smooth'
        })
    } else {
        carousel1.scrollBy({
            top: 0,
            left: positionDiff,
            behavior: 'smooth'
        })
    }
}

const dragStop = (e) => {
    isDragStart = false;
}

carousel1.addEventListener('mousedown', dragStart);
carousel1.addEventListener('touchstart', dragStart);

carousel1.addEventListener('mousemove', dragging);
carousel1.addEventListener('touchmove', dragging);

carousel1.addEventListener('mouseup', dragStop);
carousel1.addEventListener('touchend', dragStop);