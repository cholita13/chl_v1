// All Custom JS
    // @package kom_v1

// Selector shortening helpers
function q(selector, parent) { return (parent ? parent : document).querySelector(selector); };
function qq(selector, parent) { return Array.from((parent ? parent : document).querySelectorAll(selector)); };

(function () {
    'use strict'
    
    let
        topbar    = q('.topbar'),
        hero      = q('.hero-image'),
        nav       = q('.mainnav'),
        height    = hero.getBoundingClientRect().height,
        navHeight = nav.getBoundingClientRect().height;

    window.addEventListener('scroll', showTopBar, false);
    
    function showTopBar(e) {
        if (window.pageYOffset > height) {
            topbar.classList.add('is-fixed');
        } else if (window.pageYOffset < navHeight) {
            topbar.classList.add('removing-fixed');
            window.setTimeout(() => {
                topbar.classList.remove('is-fixed');
                topbar.classList.remove('removing-fixed');
            }, 500);
        }
    };
})();