function login(){
    const email = document.getElementsByName('email');
    const password = document.getElementsByName('password');

    alert(`Email: ${email[0].value} \n Senha: ${password[0].value}`);
}

function register(){
    const name = document.getElementsByName('name');
    const email = document.getElementsByName('emailRegister');
    const password = document.getElementsByName('passwordRegister');

    alert(`Nome: ${name[0].value} \n Email: ${email[0].value} \n Senha: ${password[0].value}`);
}