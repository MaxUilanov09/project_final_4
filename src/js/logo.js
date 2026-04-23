
const headerStyle = document.querySelector('.header').style;
const headerTitleStyle = document.querySelector('.header__title').style;

const bg_coeff_linear = 0.13565;
const bg_coeff_squareRoot = 8.57356;
const bg_coeff_constant = 17.22356;

const logo_coeff_linear = 0.0671306;
const logo_coeff_squareRoot = 1.01031;
const logo_coeff_constant = 20.44533;

const title_coeff_linear = 0.0994054;
const title_coeff_squareRoot = -3.31156;
const title_coeff_constant = 45.4292;
const title_lineHeight = 1.22;
const title_width_to_height_ratio = 4.85;

function getWidthBg() {
    const windowWidth = window.innerWidth;
    return bg_coeff_linear * windowWidth + bg_coeff_squareRoot * Math.sqrt(windowWidth) + bg_coeff_constant;
}

function getWidthLogo() {
    const windowWidth = window.innerWidth;
    return logo_coeff_linear * windowWidth + logo_coeff_squareRoot * Math.sqrt(windowWidth) + logo_coeff_constant;
}

function getHeightTitle() {
    const windowWidth = window.innerWidth;
    return Math.min(64, title_coeff_linear * windowWidth + title_coeff_squareRoot * Math.sqrt(windowWidth) + title_coeff_constant);
}

headerStyle.setProperty('--logo-width-bg', getWidthBg());
headerStyle.setProperty('--logo-width-logo', getWidthLogo());
headerTitleStyle.setProperty('font-size', Math.floor(getHeightTitle()) + 'px');
headerTitleStyle.setProperty('width', Math.floor(getHeightTitle() * title_lineHeight * 2 * title_width_to_height_ratio) + 'px');

addEventListener('resize', () => {
    headerStyle.setProperty('--logo-width-bg', getWidthBg());
    headerStyle.setProperty('--logo-width-logo', getWidthLogo());
    headerTitleStyle.setProperty('font-size', Math.floor(getHeightTitle()) + 'px');
    headerTitleStyle.setProperty('width', Math.floor(getHeightTitle()  * title_lineHeight * 2 * title_width_to_height_ratio) + 'px');
});