const navBtn = document.getElementById('menu-btn')
const navItem = document.getElementById('menu')

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('open')
    navItem.classList.toggle('flex')
    navItem.classList.toggle('hidden')
})