/* Toggle Button*/
const navbarMenu = document.querySelector('.header-menu')
const toggleBtn = document.querySelector('.navbar-toggleBtn')

toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open')
})
//Navbar menu click 
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open')
})
