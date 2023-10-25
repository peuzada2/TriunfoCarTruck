const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling

// Insert copies of the first few cards to end of carousel for infinite scrolling
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});



const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
//autoPlay();
  
  const menutoggle = document.querySelector('.menu')
  const sidebar = document.getElementById('header2')
  
  menutoggle.addEventListener('click', () => {
  menutoggle.classList.toggle('is-active');
  sidebar.classList.toggle('is-active');
  container.classList.toggle('is-active');
  })

ScrollReveal().reveal('.text-beneficios');
ScrollReveal().reveal('.wrapper', { delay: 200 });
ScrollReveal().reveal('.text-quem-somos', { delay: 200 });
ScrollReveal().reveal('.hillux-png', { delay: 200 });
ScrollReveal().reveal('.card-servicos', { delay: 200 });
