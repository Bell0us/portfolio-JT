const tl = gsap.timeline();

tl.from('.web-dev-heading', {
        x: '-20%',
        opacity: 0,
        duration: 2,
        ease: 'power3.out'
    })
    .from('.web-dev-text', {
        x: '-20%',
        opacity: 0,
        duration: 2,
        ease: 'power3.out'
    }, "-=1.8")
    .from('.human-heading', {
        x: '-20%',
        opacity: 0,
        duration: 2,
        ease: 'power3.out'
    }, "-=1.5")
    .from('.human-text', {
        x: '-20%',
        opacity: 0,
        duration: 2,
        ease: 'power3.out'
    }, "-=1.8")
    .from('.cv-btn', {
        y: '40%',
        opacity: 0,
        duration: 2,
        ease: 'power3.out'
    }, "-=1.8")
    .from('.arrow', {
        x: '-100%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })