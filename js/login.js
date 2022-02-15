document.getElementById('login-submit').addEventListener('click', function () {
    //get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user pass
    const passFeild = document.getElementById('user-pass');
    const userPass = passFeild.value;
    // check email && pass
    if (userEmail == 'noman@gmail.com' && userPass == '123') {
        window.location.href = 'banking.html';
    }
})
