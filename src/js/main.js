const nav = document.querySelector('.nav')
const burgerBtn = document.querySelector('.burger-btn')
const main = document.querySelector('main')
const mobileNav = document.querySelector('.nav-links-container-mobile')
const navLinksMobile = document.querySelectorAll('.nav-link-mobile')
const footerYear= document.querySelector('.footer-year')

const handleMobileNav = () => {
    mobileNav.classList.toggle('show-nav')
}

const handleCurrentYear = () => {
    const year = (new Date).getFullYear()
    footerYear.innerText=year
}

navLinksMobile.forEach(link => {
    link.addEventListener('click',handleMobileNav)
})

handleCurrentYear()
burgerBtn.addEventListener('click', handleMobileNav)
