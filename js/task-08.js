const loginFormEl = document.querySelector('.login-form')

const loginFormFillCheck = (event) => {
    event.preventDefault()
    const ALERT_TEXT = 'Всі поля мають бути заповнені';
    
    const { email, password } = event.currentTarget.elements;
    
    if (email.value !== '' && password.value !== '') {
        console.log({
            email: email.value,
            password: password.value
        });

        loginFormEl.reset()

    } else alert(ALERT_TEXT)
    
    

}

loginFormEl.addEventListener('submit', loginFormFillCheck)