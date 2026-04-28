// Smooth scrolling
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});


// Active navbar highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// Reveal animation on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".section").forEach(sec => {
    sec.classList.add("hidden");
    observer.observe(sec);
});


// Button interaction (example)
function showMessage() {
    alert("Thanks for visiting my portfolio 🚀");
}


// Lightweight typing effect
const text = "FPGA | VLSI | SoC Design Engineer";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.querySelector(".hero h3").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}

window.onload = typeEffect;