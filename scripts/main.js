const icon = document.querySelector('.icon')
const links = document.querySelector('.links')


icon.addEventListener("click", function(e) {
    links.classList.toggle('active')
})

window.addEventListener("click", function(e) {
    if(e.target.className != 'icon'){
        links.classList.remove('active')
    }
})

