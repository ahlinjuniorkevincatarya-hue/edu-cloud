const sidebar = document.querySelector('.sidebar')
const sidebarToggle = document.getElementById('sidebar-toggle')
const mainContent = document.querySelector('.main-content')
const topbarLeft = document.querySelector('.topbar-left')
const signoutBtn = document.querySelector('.signout-btn')
const themeBtns = document.querySelectorAll('.theme-btn')
const saveBtn = document.querySelector('.save-btn')
const resetBtn = document.querySelector('.reset-btn')
const settingsBtn = document.querySelector('.settings-btn')

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

// ===== THEME SELECTOR =====
themeBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        themeBtns.forEach(b => b.classList.remove('active-theme'))
        btn.classList.add('active-theme')
        const theme = btn.dataset.theme
        alert('Theme changed to: ' + theme)
    })
})

// ===== SAVE =====
saveBtn.addEventListener('click', function() {
    alert('Settings saved successfully!')
})

// ===== RESET =====
resetBtn.addEventListener('click', function() {
    const confirm = window.confirm('Reset all settings to default?')
    if (confirm) {
        alert('Settings reset to default!')
    }
})

// ===== MANAGE SESSIONS =====
settingsBtn.addEventListener('click', function() {
    alert('Active sessions manager — coming soon!')
})