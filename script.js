let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bxs-x-circle');
    navBar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bxs-x-circle');
navBar.classList.remove('active');

ScrollReveal ({
    distance: '80px',
    duration: 1700,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const sr = ScrollReveal();

  sr.reveal('.skill', {
    origin: 'top',      
    distance: '40px', 
    duration: 1300,     
    opacity: 0,            
    easing: "ease", 
    viewFactor: 0.6     
  });

const typed = new Typed('.multiple-text', {
    strings: ['Full-stack Developer', 'Software Developer', 'Front-end Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});