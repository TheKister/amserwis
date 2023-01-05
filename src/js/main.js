const nav = document.querySelector('.nav')
const burgerBtn = document.querySelector('.burger-btn')
const main = document.querySelector('main')
const mobileNav = document.querySelector('.nav-links-container-mobile')
const navLinksMobile = document.querySelectorAll('.nav-link-mobile')

const handleMobileNav = () => {
    mobileNav.classList.toggle('show-nav')
}

navLinksMobile.forEach(link => {
    link.addEventListener('click',handleMobileNav)
})

burgerBtn.addEventListener('click', handleMobileNav)