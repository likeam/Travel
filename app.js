let conrtoller;
let slideScene;


function animateSlides(){
    //Init Controller
    controller = new ScrollMagic.Controller();
    //Select some things
    const sliders = document.querySelectorAll(".slide");
    const nav = document.querySelector(".nav-header");
    //Loop over each sllide
    sliders.forEach((slide, index, slides) => {
      const revealImg = slide.querySelector(".reveal-img");
      const img = slide.querySelector("img");
      const revealText = slide.querySelector(".reveal-text");
      //GSAP
      const slideTl = gsap.timeline({
        defaults: { duration: 1, ease: "power2.inOut" }
      });
     }
}

amimateSlides();