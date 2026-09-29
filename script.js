
const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    const icon = menuBtn.querySelector("i")
    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")
    } else {
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")
    }
})
const links=document.querySelectorAll("a")
links.forEach ((l)=>{
    l.addEventListener("click",()=>{
        navLinks.classList.remove("active")
        const icon=menuBtn.querySelector("i")
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")
    });
});
// ================= TYPING EFFECT =================

const typingElement = document.getElementById("typing");

const words = [
     "Web Developer",
    "Front-End Developer",
    "React Developer"
   
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typingEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typingEffect, deleting ? 60 : 100);
}

typingEffect();
//==//
// const typingElement=document.getElementById("typing")
// const words=[
//  "Web Developer",
//   "Front-End Developer",
//  "React Developer"

// ]
// let wordIndex=0;
// let charIndex=0;
// let deleting=false;
//==//
// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ================= CURRENT YEAR =================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();