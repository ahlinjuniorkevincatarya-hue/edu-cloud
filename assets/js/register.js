const form = document.querySelector('form')
const password = document.querySelector('#password')
const repeatedPassword = document.querySelector('#repeatedP')

form.addEventListener('submit',function(e){
    e.preventDefault()
    if(password.value !== repeatedPassword.value){
        alert('Les mots de passe ne correspondent pas !')
        return
    }
    window.location.href = './dashboard.html'
})