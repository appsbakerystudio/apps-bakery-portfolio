// Preloader with Sound
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const dingSound = new Audio("assets/sounds/ding.mp3");

    preloader.classList.add("preloader-hidden");
    setTimeout(() => {
        preloader.style.display = "none";
        dingSound.play();
    }, 500);
});

// Dark Mode Toggle with Sound
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const clickSound = new Audio("assets/sounds/click.mp3");

if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    clickSound.play();

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

// Scroll Fade-in Animation
const sections = document.querySelectorAll("section");

const revealSections = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealSections);
revealSections();
