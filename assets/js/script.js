// Opening and closing the navigation menu

const BtnMenu = document.querySelector('.hamburger');
      navMenu = document.querySelector('.navbar');

BtnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    BtnMenu.classList.toggle('active');
});

navMenu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    navMenu.classList.remove('active');
    BtnMenu.classList.remove('active');
  }
});


// Show or hide the back to top button and change the header background color

const header = document.querySelector(".header");
const goTop = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 20) {
        header.classList.add("sticky");
        goTop.classList.add("show-scroll");
    }
    else {
        header.classList.remove("sticky");
        goTop.classList.remove("show-scroll");
    }
});


// Adds an "active-link" class to the web page navigation bar navigation link as the user scrolls through each section.

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset 

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.navbar a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else {
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


// Swiper 
const swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    speed: 400, 
    effect: 'fade',
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});