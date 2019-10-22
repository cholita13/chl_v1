// All Custom JS
    // @package chl_v1

// Selector shortening helpers
function q(selector, parent) { return (parent ? parent : document).querySelector(selector); };
function qq(selector, parent) { return Array.from((parent ? parent : document).querySelectorAll(selector)); };


// Hide nav after scrolled to section completes
UIkit.util.on('.scroll-trigger', 'scrolled', () => UIkit.offcanvas('#offcanvas-reveal').hide());


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
    button.classList.add('btn--branded', 'is-medium');
    button.textContent = 'More...';

    paragraphs.forEach(paragraph => paraWrap.appendChild(paragraph));

    fullContent.appendChild(paraWrap);
    fullContent.appendChild(button);

    collapse();
    paraWrap.style.transition = 'height 0.32s ease-in';

    button.addEventListener('click', () => paraWrap.style.height === "0px" ? expand() : collapse());

    function getHeight(el) {
        var height = `${el.scrollHeight}px`;
        return height;
    }

    function collapse() {
        paraWrap.style.height   = '0px';
        paraWrap.style.overflow = 'hidden';
    }

    function expand() {
        paraWrap.style.height   = getHeight(paraWrap);
        paraWrap.style.overflow = 'auto';
        paraWrap.addEventListener('transitionend', () => button.remove(),false);
    }
})();


// Star required attribute
(function () {
    'use strict'

    var inputs = qq('.form-control input:not([type="submit"]), .form-control textarea');

    inputs.map(input => {
        var span   = document.createElement('span');

        span.className = 'required';
        span.textContent = `*`;

        if (input.hasAttribute('required')) input.previousElementSibling.append(span);
    });
})();


// Character Count for Textareas
if (q('textarea')) {
    (function() {
        'use strict';

        qq('textarea').map(el => el.addEventListener('input', () => q('.counter').textContent = Number(el.value.length), false));
    }());
}


// Flatpickr
(function(){
    'use strict'

    flatpickr('#datetime', {
        enableTime: true,
        minTime: '10:00',
        maxTime: '17:00'
    })
})();


// Form actions
(function(){
    'use strict'

    const reqForm = q('.request-form')
    const processForm = form => {
        const data = new FormData(form)
        data.append('form-name', 'Catering Request Form');
        fetch('/', {
            method: 'POST',
            body: data,
        })
        .then(() => {
            form.innerHTML = `
                <p class="form-success mb-0">
                    ${reqForm.getAttribute('data-success-message')}
                </p>
            `;
        })
        .catch(error => {
            form.innerHTML = `<p class="form-error">Error: ${error}</p>`;
        })
    }

    if (reqForm) {
        reqForm.addEventListener('submit', e => {
            e.preventDefault();
            processForm(reqForm);
        })
    }
})();