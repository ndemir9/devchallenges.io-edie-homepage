(function () {
    const loaderContainer = document.querySelector('.loading');
    window.addEventListener('load', () => {
        loaderContainer.style.display = 'none';
    });
})();


const hamburgerOpenBtn = document.querySelector('.hamburger-open-btn')
const hamburgerCloseBtn = document.querySelector('.hamburger-close-btn')

hamburgerOpenBtn.addEventListener('click', () => {
    document.querySelector("header nav").style.right = "0%";
    document.querySelector("header nav").style.transition = "250ms";
})
hamburgerCloseBtn.addEventListener('click', () => {
    document.querySelector("header nav").style.right = "-100%";
    document.querySelector("header nav").style.transition = "250ms";
})