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


// Show more text on click
(function() {
    'use strict';

    var
        fullContent = q('.full-content'),
        paragraphs  = qq('.full-content p:nth-child(2) ~ p'),
        paraWrap    = document.createElement('div'),
        button      = document.createElement('button');

    paraWrap.setAttribute('class', 'show-more-less');
    button.setAttribute('type', 'button');
    button.classList.add('btn--branded');
    button.textContent = 'Read more';

    paragraphs.forEach(paragraph => {
        paraWrap.appendChild(paragraph);
    });

    fullContent.appendChild(paraWrap);
    fullContent.appendChild(button);

    collapse();
    paraWrap.style.transition = 'height 0.3s ease';

    button.addEventListener('click', () => {
        if ((paraWrap.style.height === '0px')) {
            expand();
        } else {
            collapse();
        }
    })

    function getHeight(el) {
        var height = `${el.scrollHeight}px`;
        return height;
    }

    function collapse() {
        paraWrap.style.height   = '0px';
        paraWrap.style.overflow = 'hidden';
        button.textContent      = 'Read more';
    }

    function expand() {
        paraWrap.style.height   = getHeight(paraWrap);
        paraWrap.style.overflow = 'auto';
        button.textContent      = 'Read less';
    }

    // pull all paragraphs after the first/second
    // wrap them all in a div with class of read-more or something
    // Get the height of this div (computed height so works across screen sizes)
    // set the height to 0
        // display none
        // aria-hidden true
    // add a read more link
        // when clicked
            // set the height to computed height
            // display block
            // aria-hidden false
})();