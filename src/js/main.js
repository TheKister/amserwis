const nav = document.querySelector('.nav')
const burgerBtn = document.querySelector('.burger-btn')
const main = document.querySelector('main')
const mobileNav = document.querySelector('.nav-links-container-mobile')

const handleMobileNav = () => {
    mobileNav.classList.toggle('show-nav')
}
burgerBtn.addEventListener('click', handleMobileNav)