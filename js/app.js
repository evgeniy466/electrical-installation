gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        content: '.content',
        wrapper: '.wrapper',
        smooth: 1,
        effects: true
    });

    let heroBlock = document.querySelector(".hero");

    function updateParallax(e) {
        heroBlock.style.setProperty('--move-x', `${(e.clientX - window.innerWidth / 2) * -.005}deg`);
        heroBlock.style.setProperty('--move-y', `${(e.clientY - window.innerHeight / 2) * -.01}deg`);
    }

    let animationFrameId;

    heroBlock.addEventListener('mousemove', e => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => updateParallax(e));
    });


};



/* Hero Anim */

gsap.fromTo('.hero', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.hero',
        start: '.center',
        end: 'bottom',
        scrub: true
    }
})

/* End Hero Anim */




/* Prices Anim */


gsap.fromTo('.prices', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.prices',
        start: 'bottom bottom',
        scrub: true
    }
})

let priceItems = document.querySelectorAll(".pricelist__item");

for (let i = 0; i < priceItems.length; i++) {
    if (i % 2 == 0) {
        gsap.fromTo(priceItems[i], { x: -100, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: priceItems[i],
                start: 'top bottom',
                end: 'center center',
                scrub: true,
            }
        })
    } else {
        gsap.fromTo(priceItems[i], { x: 100, opacity: 0 }, {
            opacity: 1, x: 0,
            scrollTrigger: {
                trigger: priceItems[i],
                start: 'top bottom',
                end: 'center center',
                scrub: true,

            }
        })
    }
}


/* End Prices Anim */



/* Feedback Anim */


gsap.fromTo('.feedback', { scale: 1.1 }, {
    scale: 1,
    scrollTrigger: {
        trigger: '.prices',
        start: 'bottom bottom',
        scrub: true,
    }
})

gsap.fromTo('.feedback', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.feedback',
        start: 'bottom bottom',
        scrub: true
    }
})

/* End Feedback Anim */




/* FAQ Anim */

let faqStepsNum = gsap.utils.toArray('.faq-step__number');

faqStepsNum.forEach((item, index) => {
    gsap.to(item, {
        scrollTrigger: {
            trigger: '.faq',
            start: 'top center',
            end: 'center center',
        },
        textShadow: 'var(--accent-shadow)',
        delay: index * 1,
        duration: 1
    });
});



/* End FAQ Anim */




/* Samples Anim */

let gsapBl = document.querySelector('.samples-container').offsetWidth;
let gsapTrack = document.querySelector('.samples-track').offsetWidth;
console.log(gsapTrack)
let scrollSliderTransform = gsapTrack - gsapBl

gsap.to('.samples-track', {
    ease: "none",
    duration: .1,
    scrollTrigger: {
        trigger: '.samples',
        start: 'center center',
        end: () => '+=' + gsapTrack,
        pin: true,
        scrub: true
    },
    x: '-=' + scrollSliderTransform + 'px'
});


/* End Samples Anim */




/* Reviews Anim */

if (ScrollTrigger.isTouch !== 1) {
    gsap.fromTo('.reviews-border__left', { x: -100, opacity: 0 }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.reviews',
            start: 'top center',
            end: 'center center',
            scrub: true
        }
    })
    
    gsap.fromTo('.reviews-border__right', { x: 100, opacity: 0 }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.reviews',
            start: 'top center',
            end: 'center center',
            scrub: true
        }
    })
} else {
    gsap.fromTo('.reviews-border__left', { x: -100, opacity: 0 }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.samples',
            start: 'center end',
            scrub: true,
        }
    })
    
    gsap.fromTo('.reviews-border__right', { x: 100, opacity: 0 }, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: '.reviews',
            start: 'center center',
            end: 'bottom 55% ',
            scrub: true,
        }
    })
}


const reviewCards = document.querySelectorAll(".reviews-card");

gsap.to(reviewCards, {
    y: 0,
    opacity: 1,
    duration: 5,
    stagger: 1,
    scrollTrigger: {
        trigger: ".reviews",
        start: "top center",
        end: "center center",
        toggleActions: "play none none none",
        scrub: 1
    },
});

gsap.fromTo('.reviews', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
        trigger: '.reviews',
        start: 'bottom center',
        scrub: true,
    }
})

/* End Reviews Anim */










