const alertBanner = document.querySelector('.alert-banner')
const alertClose = document.querySelector('.alert-close')
const cards = document.querySelectorAll('.service-card')
const sidebarToggle = document.getElementById('sidebar-toggle')
const mainContent = document.querySelector('.main-content')
const topbarLeft = document.querySelector('.topbar-left')
const sidebar = document.querySelector('.sidebar')

alertClose.addEventListener('click',function(){
    alertBanner.style.display = 'none'
})

cards.forEach(function(card){
    card.addEventListener('click', function(){
        const service = card.dataset.service
        window.location.href = './loading.html?service=' + service
    })
})

topbarLeft.addEventListener('click', function() {
    sidebar.classList.add('collapsed')
    mainContent.style.marginLeft = '60px'
    topbarLeft.style.display = 'none'
})

sidebarToggle.addEventListener('click', function() {
    sidebar.classList.remove('collapsed')
    mainContent.style.marginLeft = '200px'
    topbarLeft.style.display = 'flex'
})