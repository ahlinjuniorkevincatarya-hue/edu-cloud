const sidebar = document.querySelector('.sidebar')
const sidebarToggle = document.getElementById('sidebar-toggle')
const mainContent = document.querySelector('.main-content')
const topbarLeft = document.querySelector('.topbar-left')
const signoutBtn = document.querySelector('.signout-btn')
const alertTabs = document.querySelectorAll('.alert-tab')
const alertItems = document.querySelectorAll('.alert-item')
const dismissBtns = document.querySelectorAll('.alert-dismiss')
const markAllBtn = document.querySelector('.mark-all-btn')

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

// ===== SIGN OUT =====
signoutBtn.addEventListener('click', function() {
    window.location.href = './index.html'
})

// ===== TABS FILTER =====
alertTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        // Change active tab
        alertTabs.forEach(t => t.classList.remove('active-tab'))
        tab.classList.add('active-tab')

        const filter = tab.dataset.filter

        // Filtre les alertes
        alertItems.forEach(function(item) {
            if (filter === 'all') {
                item.style.display = 'flex'
            } else if (filter === 'unread') {
                item.style.display = item.classList.contains('unread') ? 'flex' : 'none'
            } else {
                item.style.display = item.classList.contains(filter) ? 'flex' : 'none'
            }
        })
    })
})

// ===== DISMISS ALERT =====
dismissBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        const alertItem = btn.closest('.alert-item')
        alertItem.style.opacity = '0'
        alertItem.style.transition = 'opacity 0.3s'
        setTimeout(function() {
            alertItem.remove()
        }, 300)
    })
})

// ===== MARK ALL AS READ =====
markAllBtn.addEventListener('click', function() {
    alertItems.forEach(function(item) {
        item.classList.remove('unread')
        const dot = item.querySelector('.unread-dot')
        if (dot) dot.remove()
    })
})