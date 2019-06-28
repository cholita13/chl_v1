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


// Google Maps
(function() {
    'use strict';

    var position    = [],
        wrapper     = q('.contact-map'),
        coordinates = wrapper.getAttribute('data-coordinates').split(',');

    position.push(coordinates);
    google.maps.event.addDomListener(window, 'load', showGoogleMaps);

    function showGoogleMaps() {
        var
            latLng      = new google.maps.LatLng(position[0], position[1]),
            mapOptions  = {
                zoom:               16,
                zoomControl:        false,
                mapTypeControl:     false,
                streetViewControl:  false,
                scaleControl:       false,
                fullscreenControl:  false,
                mapTypeId:          google.maps.MapTypeId.ROADMAP,
                center:             latLng
            },

            map = new google.maps.Map(wrapper, mapOptions);

        // Show the default red marker at the location
        var marker = new google.maps.Marker({
            position:   latLng,
            map:        map,
            draggable:  true,
            animation:  google.maps.Animation.DROP
        });
    }
})();