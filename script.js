const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

addEventListener('scroll', e => {
    const scrollTop = doc.scrollTop;
    if (scrollTop > start && scrollTop < stop) {
        const delta = scrollTop - start;
        const scale = Math.max(2.2 - (delta) / 500, 1);
        zoom.style.transform = 'scale(${scale})'
    }
})