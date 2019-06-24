// All Custom JS
    // @package chl_v1

// Selector shortening helpers
function q(selector, parent) { return (parent ? parent : document).querySelector(selector); };
function qq(selector, parent) { return Array.from((parent ? parent : document).querySelectorAll(selector)); };