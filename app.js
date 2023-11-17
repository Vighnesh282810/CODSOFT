const hamburger = document.querySelector(".hamburger");
const header = document.querySelector("header");
const nav = document.querySelector("header nav");


hamburger.addEventListener('click', () => {

    header.classList.toggle('open');
});