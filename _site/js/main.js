// All Custom JS
    // @package chl_v1

// Selector shortening helpers
function q(selector, parent) { return (parent ? parent : document).querySelector(selector); };
function qq(selector, parent) { return Array.from((parent ? parent : document).querySelectorAll(selector)); };


// Hide nav after scrolled to section completes
UIkit.util.on(".scroll-trigger", "scrolled", () =>
    UIkit.offcanvas("#offcanvas-reveal").hide()
);


// ChowNow Call
(function() {
    'use strict';

    // ChowNow code here when available

})();