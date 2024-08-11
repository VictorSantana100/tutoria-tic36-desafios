const CLASS_HIDDEN = 'hidden';
const BUTTON_ACTIVE = 'btn-active';

function visibilyControlForm(formLogin, formRegister, featuredImage){
    const registerIsActive = formRegister.classList.contains(CLASS_HIDDEN);
    if (registerIsActive) {
        formRegister.classList.remove(CLASS_HIDDEN);
        formLogin.classList.add(CLASS_HIDDEN);
        featuredImage.src = '/img/sign-up.png';
    } else {
        formRegister.classList.add(CLASS_HIDDEN);
        formLogin.classList.remove(CLASS_HIDDEN);
        featuredImage.src = '/img/computer-login.png';
    }
}

function visibilityControlButon(btnOpen, btnRegister){
    if (btnOpen.classList.contains(BUTTON_ACTIVE)) {
        btnOpen.classList.remove(BUTTON_ACTIVE);
        btnRegister.classList.add(BUTTON_ACTIVE);
    } else {
        btnOpen.classList.add(BUTTON_ACTIVE);
        btnRegister.classList.remove(BUTTON_ACTIVE);
    }
}

function hiddenForms(formLogin, formRegister, toogleBtn, formPasswordReset){
    formLogin.classList.add(CLASS_HIDDEN);
    formRegister.classList.add(CLASS_HIDDEN);
    toogleBtn.classList.add(CLASS_HIDDEN);
    formPasswordReset.classList.remove(CLASS_HIDDEN);
}


function transitionForm() {
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');

    const btnOpen = document.getElementById('btn-open');
    const btnRegister = document.getElementById('btn-register');

    const featuredImage = document.getElementById('featured-image');

    visibilyControlForm(formLogin, formRegister, featuredImage);
    visibilityControlButon(btnOpen, btnRegister);
}

function passwordReset(){
    const formLogin = document.getElementById('form-login');
    const formRegister = document.getElementById('form-register');
    const toogleBtn = document.getElementById('toogle');
    const formPasswordReset = document.getElementById('password-reset');

    hiddenForms(formLogin, formRegister, toogleBtn, formPasswordReset);
}