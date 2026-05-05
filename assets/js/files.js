// ===== SELECTIONS =====
const sidebar = document.querySelector('.sidebar')
const sidebarToggle = document.getElementById('sidebar-toggle')
const mainContent = document.querySelector('.main-content')
const topbarLeft = document.querySelector('.topbar-left')
const fileRows = document.querySelectorAll('.file-row')
const recentFileCards = document.querySelectorAll('.recent-file-card')
const folderCards = document.querySelectorAll('.folder-card')
const downloadBtn = document.querySelector('.download-btn')
const deleteBtn = document.querySelector('.delete-btn')
const pageBtns = document.querySelectorAll('.page-btn')
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

// ===== FILE ROW SELECTION =====
fileRows.forEach(function(row) {
    row.addEventListener('click', function() {
        // Enlève active-row de tous les rows
        fileRows.forEach(r => r.classList.remove('active-row'))
        // Ajoute active-row sur le row cliqué
        row.classList.add('active-row')
        // Met à jour les détails du fichier
        const fileName = row.querySelector('.file-row-title').textContent
        const fileSize = row.querySelector('.file-row-size').textContent
        const fileDate = row.querySelector('.file-row-date').textContent
        const fileBadge = row.querySelector('.file-badge').textContent
        document.querySelector('.file-details-name').textContent = fileName
        document.querySelector('.file-details-type').textContent = fileBadge + ' SCRIPT'
        document.querySelectorAll('.metadata-row')[0].querySelector('span:last-child').textContent = fileSize
        document.querySelectorAll('.metadata-row')[2].querySelector('span:last-child').textContent = fileDate
    })
})

// ===== RECENT FILE CARDS =====
recentFileCards.forEach(function(card) {
    card.addEventListener('click', function() {
        const fileName = card.querySelector('.file-name').textContent
        alert('Opening ' + fileName + '...')
    })
})

// ===== FOLDER CARDS =====
folderCards.forEach(function(card) {
    card.addEventListener('click', function() {
        const folderName = card.querySelector('.folder-name').textContent
        alert('Opening folder: ' + folderName)
    })
})

// ===== DOWNLOAD =====
downloadBtn.addEventListener('click', function() {
    const fileName = document.querySelector('.file-details-name').textContent
    alert('Downloading ' + fileName + '...')
})

// ===== DELETE =====
deleteBtn.addEventListener('click', function() {
    const fileName = document.querySelector('.file-details-name').textContent
    const confirm = window.confirm('Are you sure you want to delete ' + fileName + '?')
    if (confirm) {
        alert(fileName + ' deleted successfully!')
    }
})

// ===== PAGINATION =====
pageBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        pageBtns.forEach(b => b.classList.remove('active-page'))
        btn.classList.add('active-page')
    })
})

// ===== SIGN OUT =====
signoutBtn.addEventListener('click', function() {
    window.location.href = './index.html'
})