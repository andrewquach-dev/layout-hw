// https://i.imgur.com/qppq9r4.jpg
// https://stackoverflow.com/questions/51550195/what-is-the-best-way-to-write-css-flex-code-following-bem-convention

//https://festive-bhabha-d49541.netlify.app/

//https://www.youtube.com/watch?v=gXkqy0b4M5g

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav__row");
    const navLinks = document.querySelectorAll(".nav__list");

    //toggle nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0
          }s`;
            }
        });
        //burger animation
        burger.classList.toggle("toggle");
    });
};

navSlide();