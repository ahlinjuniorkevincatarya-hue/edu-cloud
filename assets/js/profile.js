const sidebar = document.querySelector('.sidebar')
const sidebarToggle = document.getElementById('sidebar-toggle')
const mainContent = document.querySelector('.main-content')
const topbarLeft = document.querySelector('.topbar-left')
const signoutBtn = document.querySelector('.signout-btn')
const darkModeToggle = document.getElementById('dark-mode-toggle')
const dangerItem = document.querySelector('.danger-item')
const editProfileBtn = document.querySelector('.edit-profile-btn')
const profileItems = document.querySelectorAll('.profile-item:not(.danger-item)')

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

// ===== DARK MODE TOGGLE =====
darkModeToggle.addEventListener('change', function() {
    if (darkModeToggle.checked) {
        alert('Dark mode enabled!')
    } else {
        alert('Light mode enabled!')
    }
})

// ===== EDIT PROFILE =====
editProfileBtn.addEventListener('click', function() {
    alert('Edit profile — coming soon!')
})

// ===== PROFILE ITEMS =====
profileItems.forEach(function(item) {
    item.addEventListener('click', function() {
        const title = item.querySelector('.profile-item-title').textContent
        alert(title + ' — coming soon!')
    })
})

// ===== DANGER ZONE — SIGN OUT =====
dangerItem.addEventListener('click', function() {
    const confirm = window.confirm('Are you sure you want to sign out?')
    if (confirm) {
        window.location.href = './index.html'
    }
})