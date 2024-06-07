/*==================== SHOW HIDDEN PASSWORD ==================*/
const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)

    iconEye.addEventListener('click', () => {
        // Change password to text
        if(input.type === 'password') {
            // Switch to text
            input.type = 'text'

            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        }else {
            // Change to password
            input.type = 'password'

            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}

showHiddenPass('login-pass','login-eye')

const loginForm = document.getElementById('login-form');
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Login Berhasil!!!');
      })