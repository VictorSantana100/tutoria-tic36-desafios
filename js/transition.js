
function visibilyControlForm(formLogin, formRegister){
    if (formRegister.classList.contains('hidden')) {
        formRegister.classList.remove('hidden');
        formLogin.classList.add('hidden');
    } else {
        formRegister.classList.add('hidden');
        formLogin.classList.remove('hidden');
    }
}

function visibilityControlButon(btnOpen, btnRegister){
    if (btnOpen.classList.contains('btn-active')) {
        btnOpen.classList.remove('btn-active');
        btnRegister.classList.add('btn-active');
    } else {
        btnOpen.classList.add('btn-active');
        btnRegister.classList.remove('btn-active');
    }
}

function transitionForm() {
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');

    const btnOpen = document.getElementById('btn-open');
    const btnRegister = document.getElementById('btn-register');

    visibilyControlForm(formLogin, formRegister);
    visibilityControlButon(btnOpen, btnRegister);
}