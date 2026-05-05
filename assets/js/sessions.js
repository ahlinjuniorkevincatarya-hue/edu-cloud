// ===== SELECTIONS =====
const sidebar = document.querySelector('.sidebar')
const sidebarToggle = document.getElementById('sidebar-toggle')
const mainContent = document.querySelector('.main-content')
const topbarLeft = document.querySelector('.topbar-left')
const connectBtns = document.querySelectorAll('.connect-btn')
const resumeBtns = document.querySelectorAll('.resume-btn')
const quickServiceItems = document.querySelectorAll('.quick-service-item')
const signoutBtn = document.querySelector('.signout-btn')

// ===== SIDEBAR TOGGLE =====
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

// ===== CONNECT BUTTONS =====
connectBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const sessionName = btn.closest('.session-card')
            .querySelector('h3').textContent
        alert('Connecting to ' + sessionName + '...')
    })
})

// ===== RESUME BUTTONS =====
resumeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const sessionName = btn.closest('.history-card')
            .querySelector('.history-name').textContent
        alert('Resuming ' + sessionName + '...')
    })
})

// ===== QUICK SERVICE LAUNCH =====
quickServiceItems.forEach(function(item) {
    item.addEventListener('click', function() {
        const serviceName = item.querySelector('.qs-name').textContent
        window.location.href = './loading.html?service=' + serviceName
    })
})

// ===== SIGN OUT =====
signoutBtn.addEventListener('click', function() {
    window.location.href = './index.html'
})