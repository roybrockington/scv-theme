// Animated brand menu

const menuButton = document.getElementsByClassName('brand_drop')[0]
const menuElements = document.getElementsByClassName('brand_drop')
if (menuElements.length > 0) {

  const brandMenu = document.getElementsByClassName('navbrand-menu')[0]
  let menuOn = false

  const slideDown = elem => {
    elem.style.height = menuOn ? `1px` : `${elem.scrollHeight}px`
  }

  menuButton.addEventListener("click", function (e) {
    e.preventDefault()
    slideDown(brandMenu)
    menuOn = !menuOn
  })

}

// Highlight section menu via URL

const thisUrl = window.location.pathname;
const urlArr = thisUrl.split("/")
const section = urlArr[1] // home-audio
const sectionLink = document.getElementById(section+"-link")
if(sectionLink) {
  sectionLink.classList.add("scv-highlight") // add border
}


// Halt searches with less than 2 characters
const productSearch = document.getElementById('views-exposed-form-algolia-page-1')
const searchBox = document.getElementById('edit-term')
const searchField = document.getElementsByName('term')
if (productSearch) {
  productSearch.onsubmit = e => {
    e.preventDefault()
    const searchQuery = e.target[0].value
    if (searchQuery.length < 2) {
      searchField[0].classList.add('is-invalid')
    } else {
      productSearch.submit()
    }
  }
}



(function ($, Drupal) { // map attachment interaction

  'use strict';

  Drupal.behaviors.geofieldMapLeafletMapInteraction = {
    attach: function (context, settings) {

        $(document).on('leaflet.map', (e, settings, lMap, mapid) => {
          const map = lMap;
          const markers = Drupal.Leaflet[mapid].markers;

          $('.view-display-id-attachment_2 .views-field .marker-selector', context).each(function () {
            $(this).hover(
              function() {
                $(this).css("background", "lightgray");
                let marker_id = $(this).data('marker-id');
                setTimeout(function () {
                  if(markers[marker_id]) {
                    map.setView(markers[marker_id].getLatLng(), '15');
                    markers[marker_id].fire('click');
                  }
                }, 500);
              }, function() {
                $(this).css("background", "white");
                setTimeout(function () {
                  map.closePopup();
                }, 200);
              }
            );
          });

          $('.view-display-id-attachment_2', context).each(function () {
            let timeoutId;
            $(this).hover(
              function() {
              }, function() {
                $( this ).css("text-decoration", "none");
                timeoutId = setTimeout(function () {
                  map.closePopup();
                  $('#' + 'leaflet-map--' + mapid + '--reset-control').click();
                  Drupal.Leaflet.prototype.map_reset(mapid);
                }, 2000);
              }
            );
          });
      });
    }
  };

})(jQuery, Drupal);

