gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        effects: true
    });

    gsap.fromTo('.hero', { opacity: 1 }, { 
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: '.center',
            end: 'bottom',
            scrub: true
        }
    })
};





 let priceItemsLeft = gsap.utils.toArray('.pricelist__left .pricelist__item');

 priceItemsLeft.forEach(item => {
    gsap.fromTo(item, {x: -100 ,opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-220',
            scrub: true
        }
    })
 })

 let priceItemsRight = gsap.utils.toArray('.pricelist__right .pricelist__item');

 priceItemsRight.forEach(item => {
    gsap.fromTo(item, {x: 100 ,opacity: 0}, {
        opacity: 1, x: 0,
        scrollTrigger: {
            trigger: item,
            start: '-850',
            end: '-230',
            scrub: true
        }
    })
 })

let heroBlock = document.querySelector(".hero");
heroBlock.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
        --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
        --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})

const swiper = new Swiper('.swiper', {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    mousewheel: {
    releaseOnEdges: true,
    eventsTarget: ".swiper"
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


 