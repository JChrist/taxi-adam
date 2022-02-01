/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    document.getElementById('year').innerText = '' + new Date().getFullYear();

    const userLang = navigator.language || navigator.userLanguage || '';
    const lang = userLang.startsWith("el") ? 'el' : 'en';
    switchLanguage(lang);

    document.getElementById('languageSwitchEnglish').addEventListener('click', e => switchLanguage('en'));
    document.getElementById('languageSwitchGreek').addEventListener('click', e => switchLanguage('el'));
});

function switchLanguage(lang) {
    lang = lang || 'el';
    const disableLang = lang === 'el' ? 'en' : 'el';
    document.querySelectorAll('.text-' + lang).forEach(e => e.classList.remove('d-none'));
    document.querySelectorAll('.text-' + disableLang).forEach(e => e.classList.add('d-none'));
}
