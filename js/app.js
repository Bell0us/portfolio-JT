var rellax = new Rellax('.rellax');


/* 
 *
 * Menu active class toggle
 *
 */

const nav = $('.navigation');
const li = nav.find('li');

const home = $('#landing');
const homeLink = nav.find('.home');

const work = $('#work');
const workLink = nav.find('.work');

const about = $('#about');
const aboutLink = nav.find('.about');

const contact = $('#contact');
const contactLink = nav.find('.contact');


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= home.offset().top) {
        homeLink.addClass('active').siblings().removeClass('active');
    }
    if (scroll >= work.offset().top) {
        workLink.addClass('active').siblings().removeClass('active');
    }
    if (scroll >= about.offset().top) {
        aboutLink.addClass('active').siblings().removeClass('active');
    }
    if (scroll >= contact.offset().top) {
        contactLink.addClass('active').siblings().removeClass('active');
    }

});


/*
 *
 * Cards switcherino
 *
 */

const uiCard = document.querySelector('.ui-card-col');
const frontEndCard = document.querySelector('.frontend-card-col');
const logoCard = document.querySelector('.logo-card-col');

const uiSwitch = document.querySelector('.UI-switch')
const frontEndSwitch = document.querySelector('.frontend-switch')
const logoSwitch = document.querySelector('.logo-switch')

uiSwitch.addEventListener('click', () => {
    uiSwitch.classList.add('switch-active');
    frontEndSwitch.classList.remove('switch-active');
    logoSwitch.classList.remove('switch-active');

    uiCard.style.opacity = "1";
    frontEndCard.style.opacity = "0";
    logoCard.style.opacity = "0";
});

frontEndSwitch.addEventListener('click', () => {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.add('switch-active')
    logoSwitch.classList.remove('switch-active');

    uiCard.style.opacity = "0";
    frontEndCard.style.opacity = "1";
    logoCard.style.opacity = "0";
});

logoSwitch.addEventListener('click', () => {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.remove('switch-active')
    logoSwitch.classList.add('switch-active');

    uiCard.style.opacity = "0";
    frontEndCard.style.opacity = "0";
    logoCard.style.opacity = "1";
})


const tl = gsap.timeline();

/*
 *
 * Loading page animations
 *
 */

tl.to('.intro-logo', {
        y: '0%',
        duration: 1,
        ease: 'power1.out'
    })
    .to('.text', {
        y: '0%',
        duration: 1,
        stagger: .5,
        ease: 'power1.out'
    }, "-=.25")
    .to('.slider', {
        y: '-100%',
        duration: 1.5,
        delay: .5,
        ease: 'power1.out'
    })
    .to('.intro', {
        y: '-100%',
        duration: 1,
        ease: 'power1.out'
    }, "-=1")