const togglePassword = document.querySelector('#toggle-password')
const passwordInput = document.querySelector('#password')
const form = document.querySelector('form')

togglePassword.addEventListener('click',function(){
    if (passwordInput.type === 'password'){
        passwordInput.type = 'text'
        togglePassword.classList.replace('fa-eye', 'fa-eye-slash')
    } else{
        passwordInput.type = 'password'
        togglePassword.classList.replace('fa-eye-slash', 'fa-eye')
    }
})

form.addEventListener('submit',function(e){
    e.preventDefault()
    window.location.href = './dashboard.html'
})