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
    if (scroll >= (work.offset().top - 400)) {
        workLink.addClass('active').siblings().removeClass('active');
    }
    if (scroll >= (about.offset().top - 400)) {
        aboutLink.addClass('active').siblings().removeClass('active');
    }
    if (scroll >= (contact.offset().top - 400)) {
        contactLink.addClass('active').siblings().removeClass('active');
    }

});


/*
 *
 * POP UP menu
 *
 */

const menuBadge = document.querySelector('.menu-badge');
const overlay = document.querySelector('.overlay');
const homeLinkMobile = document.querySelector('.home');
const workLinkMobile = document.querySelector('.work');
const aboutLinkMobile = document.querySelector('.about');
const hireLinkMobile = document.querySelector('.contact');

const menuButtonContact = document.querySelector('.menu-button-contact');


menuBadge.addEventListener('click', () => {
    overlay.classList.toggle('open');
});

homeLinkMobile.addEventListener('click', () => {
    overlay.classList.remove('open');
    menuBadge.classList.remove('active');
});

workLinkMobile.addEventListener('click', () => {
    overlay.classList.remove('open');
    menuBadge.classList.remove('active');
});

aboutLinkMobile.addEventListener('click', () => {
    overlay.classList.remove('open');
    menuBadge.classList.remove('active');
});

hireLinkMobile.addEventListener('click', () => {
    overlay.classList.remove('open');
    menuBadge.classList.remove('active');
});

menuButtonContact.addEventListener('click', () => {
    overlay.classList.remove('open');
    menuBadge.classList.remove('active');
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


/*
 *
 * Swiperino
 *
 */

// Swipe left

uiCard.addEventListener('swiped-left', function (e) {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.add('switch-active')
    logoSwitch.classList.remove('switch-active');

    uiCard.style.zIndex = "0";
    frontEndCard.style.zIndex = "1";
    logoCard.style.zIndex = "0";
});

frontEndCard.addEventListener('swiped-left', function (e) {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.remove('switch-active')
    logoSwitch.classList.add('switch-active');

    uiCard.style.zIndex = "0";
    frontEndCard.style.zIndex = "0";
    logoCard.style.zIndex = "1";
});

//swipe right

frontEndCard.addEventListener('swiped-right', function (e) {
    uiSwitch.classList.add('switch-active');
    frontEndSwitch.classList.remove('switch-active');
    logoSwitch.classList.remove('switch-active');

    uiCard.style.zIndex = "1";
    frontEndCard.style.zIndex = "0";
    logoCard.style.zIndex = "0";
});

logoCard.addEventListener('swiped-right', function (e) {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.add('switch-active')
    logoSwitch.classList.remove('switch-active');

    uiCard.style.zIndex = "0";
    frontEndCard.style.zIndex = "1";
    logoCard.style.zIndex = "0";
});


/*
 *
 * Switches
 *
 */

uiSwitch.addEventListener('click', () => {
    uiSwitch.classList.add('switch-active');
    frontEndSwitch.classList.remove('switch-active');
    logoSwitch.classList.remove('switch-active');

    uiCard.style.zIndex = "1";
    frontEndCard.style.zIndex = "0";
    logoCard.style.zIndex = "0";
});

frontEndSwitch.addEventListener('click', () => {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.add('switch-active')
    logoSwitch.classList.remove('switch-active');

    uiCard.style.zIndex = "0";
    frontEndCard.style.zIndex = "1";
    logoCard.style.zIndex = "0";
});

logoSwitch.addEventListener('click', () => {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.remove('switch-active')
    logoSwitch.classList.add('switch-active');

    uiCard.style.zIndex = "0";
    frontEndCard.style.zIndex = "0";
    logoCard.style.zIndex = "1";
})





/*
 *
 * Loading page animations
 *
 */

const tl = gsap.timeline();

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


/*
 *
 * GSAP Anims
 *
 */

// Landing page

tl.from('.home-heading', {
        y: '20%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, "-=.5")
    .from('.introduction', {
        y: '20%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, "-=.5")
    .from('.scroll-badge', {
        y: '-20%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, "-=.5")
    .from('.scroll-text', {
        y: '-20%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, "-=1")


gsap.registerPlugin(ScrollTrigger);

gsap.from('.work-heading', {
    scrollTrigger: {
        trigger: '.work-heading',
        start: 'top 100%',
        scrub: 1
    },
    y: '60%',
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})

gsap.from('.discover-button', {
    scrollTrigger: {
        trigger: '.discover-button',
        start: 'top 100%',
        scrub: 1
    },
    y: '60%',
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})

gsap.from('.site-placeholder', {
    scrollTrigger: {
        trigger: '.site-placeholder',
        start: 'top 100%',
        scrub: 1
    },
    y: '60%',
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})

gsap.from('.site-container', {
    scrollTrigger: {
        trigger: '.site-container',
        start: 'top 100%',
        scrub: 1
    },
    y: '60%',
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})

gsap.from('.about-heading', {
    scrollTrigger: {
        trigger: '.about-heading',
        start: 'top 100%',
        scrub: 1
    },
    y: '60%',
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})

gsap.from('.learn-more-btn', {
    scrollTrigger: {
        trigger: '.learn-more-btn',
        start: 'top 100%',
        scrub: 1
    },
    y: '60%',
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})

gsap.from('.contact-heading', {
    scrollTrigger: {
        trigger: '.contact-heading',
        start: 'top 100%',
        scrub: 1
    },
    y: '60%',
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})
gsap.from('.main-contact', {
    scrollTrigger: {
        trigger: '.main-contact',
        start: 'top 100%',
        scrub: 1
    },
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})
gsap.from('.diff-contact', {
    scrollTrigger: {
        trigger: '.diff-contact',
        start: 'top 100%',
        scrub: 1
    },
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
})


if (window.innerWidth >= 991) {

    gsap.from('.ui-card', {
        scrollTrigger: {
            trigger: '.ui-card',
            start: 'top 100%',
            scrub: 1
        },
        y: '60%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
    })
    gsap.from('.frontend-card', {
        scrollTrigger: {
            trigger: '.frontend-card',
            start: 'top 100%',
            scrub: 1
        },
        y: '60%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
    })
    gsap.from('.logo-card', {
        scrollTrigger: {
            trigger: '.logo-card',
            start: 'top 100%',
            scrub: 1
        },
        y: '60%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
    })
}


if (window.innerWidth <= 991) {

    gsap.from('.cards-container', {
        scrollTrigger: {
            trigger: '.cards-container',
            start: 'top 100%',
            scrub: 1
        },
        y: '60%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
    })
}