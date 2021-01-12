const hamburger = document.getElementById('hamburger');
const myNavbar = document.getElementById('myNavbar');

hamburger.addEventListener('click', () => {
    myNavbar.classList.toggle('show');
});