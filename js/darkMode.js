const DARK_MODE_ICON = 'la-moon';
const LIGHT_MODE_ICON = 'la-sun';

const DARK_MODE_BG_COLOR = '--dark-mode-bg-color';
const DARK_MODE_COL_BG_COLOR = '--dark-mode-bg-col-color';

const LIGHT_MODE_BG_COLOR = '--background';

const WHITE_COLOR = '--white-color';
const BLACK_COLOR = '--black-color';

function setDarkMode(refIcon, subtitle, colForm) {
    const isDarkMode = refIcon.classList.contains(LIGHT_MODE_ICON);
    if (isDarkMode) {
        refIcon.classList.remove(LIGHT_MODE_ICON);
        refIcon.classList.add(DARK_MODE_ICON);
        document.body.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(DARK_MODE_BG_COLOR));
        colForm.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(DARK_MODE_COL_BG_COLOR));
        subtitle[0].style.setProperty('color', getComputedStyle(document.documentElement).getPropertyValue(WHITE_COLOR));
    } else {
        refIcon.classList.remove(DARK_MODE_ICON);
        refIcon.classList.add(LIGHT_MODE_ICON);
        document.body.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(LIGHT_MODE_BG_COLOR));
        colForm.style.setProperty('background-color', getComputedStyle(document.documentElement).getPropertyValue(WHITE_COLOR));
        subtitle[0].style.setProperty('color', getComputedStyle(document.documentElement).getPropertyValue(BLACK_COLOR));
    }
}

function darkModeActive() {
    const refIcon = document.getElementById('icon-mode');
    const subtitle = document.getElementsByClassName('subtitle');
    const colForm =  document.getElementById('col-form');
    setDarkMode(refIcon, subtitle, colForm);
}