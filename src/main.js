import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(SplitText);
let scrollSmother = ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: 0.1,
});

document.querySelector("#servicios-link").addEventListener("click", () => {
  scrollSmother.scrollTo("#servicios", true);
});

document.querySelector("#casos-link").addEventListener("click", () => {
  scrollSmother.scrollTo("#casos", true);
});

document.querySelector("#cita-link").addEventListener("click", () => {
  scrollSmother.scrollTo("#cita", true);
});

document
  .querySelector("#servicios-link-mobile")
  .addEventListener("click", () => {
    scrollSmother.scrollTo("#servicios", true);
    gsap.to("#mobile-nav", {
      xPercent: -100,
      ease: "power2.inOut",
    });
  });

document.querySelector("#casos-link-mobile").addEventListener("click", () => {
  scrollSmother.scrollTo("#casos", true);
  gsap.to("#mobile-nav", {
    xPercent: -100,
    ease: "power2.inOut",
  });
});

document.querySelector("#cita-link-mobile").addEventListener("click", () => {
  scrollSmother.scrollTo("#cita", true);
  gsap.to("#mobile-nav", {
    xPercent: -100,
    ease: "power2.inOut",
  });
});

document.querySelectorAll(".title-anim").forEach((title) => {
  const split = SplitText.create(title, {
    type: "words",
    autoSplit: true,
  });

  gsap.from(split.words, {
    scrollTrigger: {
      trigger: title,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    filter: "blur(10px)",
    stagger: 0.1,
  });
});

document.querySelectorAll(".text-anim").forEach((text) => {
  const split = SplitText.create(text, {
    type: "words",
    autoSplit: true,
  });

  gsap.from(split.words, {
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
    yPercent: 100,
    opacity: 0,
    stagger: 0.05,
  });
});

document.querySelectorAll(".card-anim").forEach((card) => {
  gsap.from(card, {
    opacity: 0,

    y: 20,

    duration: 0.6,

    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
});

document.querySelector("#nav-button").addEventListener("click", () => {
  gsap.to("#mobile-nav", {
    xPercent: 100,
    ease: "power2.inOut",
  });
  scroll(0, 0);
});

document.querySelectorAll(".reservar-button").forEach((button) => {
  button.addEventListener("click", () => {
    alert(
      "Compra el servicio de desarrollo web para que este botón funcione y puedan reservar desde TU web",
    );
  });
});
