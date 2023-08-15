/* Toggle Button*/
const navbarMenu = document.querySelector('.header-menu')
const toggleBtn = document.querySelector('.navbar-toggleBtn')
const overlay = document.querySelector('.main-background-overlay');

toggleBtn.addEventListener('click', () => {
    let toggle = navbarMenu.classList.toggle('open')
    if (toggle) {
        overlay.className += " responsive";
    } else {
        overlay.className += "main-background-overlay";
    }
})
//Navbar menu click 
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open')
})
