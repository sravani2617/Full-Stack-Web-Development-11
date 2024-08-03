document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        console.log('Username:', username);
        console.log('Password:', password);

        const usernamePattern = /^[a-zA-Z0-9]{3,15}$/; 
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/; 

        console.log('Username Pattern Test:', usernamePattern.test(username));
        console.log('Password Pattern Test:', passwordPattern.test(password));

        if (!usernamePattern.test(username)) {
            console.log('Invalid username. It should be 3-15 alphanumeric characters.');
            return;
        }

        if (!passwordPattern.test(password)) {
            console.log('Invalid password. It should be 6-12 characters with at least 1 letter and 1 number.');
            return;
        }

        console.log('Login successful based on regex conditions');
    });
});
