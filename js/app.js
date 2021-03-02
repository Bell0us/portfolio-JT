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
 * GSAP anims
 *
 */


const tl = gsap.timeline();

/*
 *
 * Landing page animations
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