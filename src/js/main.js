 /*================================================
* Template Name: Hotel Zante - Hotel & Resort HTML Template
* Version: 1.3
* Author Name: Jomin Muskaj (Eagle-Themes)
* Author URI: eagle-themes.com
=================================================*/

 const MAP_MARKER = {
      title: "get dynamical title",
      name: "get dynamical name",
      address: "get dynamical address",
      text: "get dynamical text",
      about: "get dynamical about",
      icon: "images/icons/pin.svg"
 }

 const MAP_COORDINATS = { lat: 50.58737834, lng: 10.78158438 };

 const MAP_CONFIG = {
      center: MAP_COORDINATS,
      zoom: 14,
      scrollwheel: false,
      streetViewControl: false
 };

 const MAP_PLACES_CONFIG = {
      center: MAP_COORDINATS,
      zoom: 12,
      scrollwheel: false,
      streetViewControl: false,
      maxZoom: 18,
      minZoom: 10,
      scrollwheel: false,
      disableDefaultUI: false,
      disableDoubleClickZoom: false,
      mapTypeControl: false,
      mozCancelFullScreen: false,
      msExitFullscreen: false,
      streetViewControl: false,
      scaleControl: false
 };

 const MAP_PLACES_RADIUS = 6000;

 const MAP_PLACES_STYLES = [
      {
           "elementType": "geometry",
           "stylers": [{
                "color": "#f5f5f5"
           }]
      },
      {
           "elementType": "labels.icon",
           "stylers": [{
                "visibility": "off"
           }]
      },
      {
           "elementType": "labels.text.fill",
           "stylers": [{
                "color": "#616161"
           }]
      },
      {
           "elementType": "labels.text.stroke",
           "stylers": [{
                "color": "#f5f5f5"
           }]
      },
      {
           "featureType": "administrative",
           "elementType": "geometry",
           "stylers": [{
                "visibility": "off"
           }]
      },
      {
           "featureType": "administrative.land_parcel",
           "elementType": "labels",
           "stylers": [{
                "visibility": "off"
           }]
      },
      {
           "featureType": "administrative.land_parcel",
           "elementType": "labels.text.fill",
           "stylers": [{
                "color": "#bdbdbd"
           }]
      },
      {
           "featureType": "poi",
           "stylers": [{
                "visibility": "off"
           }]
      },
      {
           "featureType": "poi",
           "elementType": "geometry",
           "stylers": [{
                "color": "#eeeeee"
           }]
      },
      {
           "featureType": "poi",
           "elementType": "labels.text",
           "stylers": [{
                "visibility": "off"
           }]
      },
      {
           "featureType": "poi",
           "elementType": "labels.text.fill",
           "stylers": [{
                "color": "#757575"
           }]
      },
      {
           "featureType": "poi.park",
           "elementType": "geometry",
           "stylers": [{
                "color": "#e5e5e5"
           }]
      },
      {
           "featureType": "poi.park",
           "elementType": "labels.text.fill",
           "stylers": [{
                "color": "#9e9e9e"
           }]
      },
      {
           "featureType": "road",
           "elementType": "geometry",
           "stylers": [{
                "color": "#ffffff"
           }]
      },
      {
           "featureType": "road",
           "elementType": "labels.icon",
           "stylers": [{
                "visibility": "off"
           }]
      },
      {
           "featureType": "road.arterial",
           "elementType": "labels.text.fill",
           "stylers": [{
                "color": "#757575"
           }]
      },
      {
           "featureType": "road.highway",
           "elementType": "geometry",
           "stylers": [{
                "color": "#dadada"
           }]
      },
      {
           "featureType": "road.highway",
           "elementType": "labels.text.fill",
           "stylers": [{
                "color": "#616161"
           }]
      },
      {
           "featureType": "road.local",
           "elementType": "labels",
           "stylers": [{
                "visibility": "off"
           }]
      },
      {
           "featureType": "road.local",
           "elementType": "labels.text.fill",
           "stylers": [{
                "color": "#9e9e9e"
           }]
      },
      {
           "featureType": "transit",
           "stylers": [{
                "visibility": "off"
           }]
      },
      {
           "featureType": "transit.line",
           "elementType": "geometry",
           "stylers": [{
                "color": "#e5e5e5"
           }]
      },
      {
           "featureType": "transit.station",
           "elementType": "geometry",
           "stylers": [{
                "color": "#eeeeee"
           }]
      },
      {
           "featureType": "water",
           "elementType": "geometry",
           "stylers": [{
                "color": "#c9c9c9"
           }]
      },
      {
           "featureType": "water",
           "elementType": "labels.text.fill",
           "stylers": [{
                "color": "#9e9e9e"
           }]
      }
 ];

 const getBookingLink = (data) => {
      return `https://www.booking.com/hotel/cz/boutique-corso-revnice.en-gb.html?checkin=${data.checkin}&checkout=${data.checkout}&group_adults=${data.adults}&req_adults=${data.adults}&group_children=${data.children}&req_children=${data.children}`
 }

 (function($) {
      "use strict";

      /*========== LOADING PAGE ==========*/
      $(window).on('load', function() {
           $("#loading").fadeOut(500);
      });

      /*Document is Raedy */
      $(document).ready(function() {

           /*========== SMOOTHSTATE ==========*/
           $('#smoothpage').smoothState({
                anchors: 'nav a',
                blacklist: 'form',
           });

           /*========== MENU ==========*/
           $(window).on("scroll", function() {

                var header = $('header')

                if (header.length > 0) {

                     var window_height = $(this).scrollTop();
                     var topmenuheight = 50;

                     if (window_height > topmenuheight) {

                          if (header.hasClass("transparent"))
                               header.addClass("nav_bg");
                          // Logo
                          $(".light").addClass("nodisplay");
                          $(".dark").removeClass("nodisplay");

                          // Check if Header is fixed or not
                          if (header.hasClass('fixed')) {
                               header.addClass('navbar-fixed-top');
                               // Add scroll Class
                               header.addClass("scroll");
                          }

                     } else {
                          if (header.hasClass("nav_bg"))
                               header.removeClass("nav_bg");

                          $(".dark").addClass("nodisplay");
                          $(".light").removeClass("nodisplay");

                          header.removeClass("scroll");
                          header.removeClass("navbar-fixed-top");
                     }
                }
           });

           $(function() {
                function toggleNavbarMethod() {
                     if ($(window).width() > 992) {

                          $('.dropdown')
                               .on('mouseover', function() {
                                    $(this).addClass('open');
                                    $('b', this).toggleClass("caret caret-up");
                               })

                               .on('mouseout', function() {
                                    $(this).removeClass('open');
                                    $('b', this).toggleClass("caret caret-up");
                               });


                     } else {
                          $('.dropdown').off('mouseover').off('mouseout');
                          $('.dropdown-toggle')

                               .on('click', function(e) {
                                    $('b', this).toggleClass("caret caret-up");
                               });

                     }
                }
                toggleNavbarMethod();
                $(window).on("resize", (toggleNavbarMethod));

                $(".navbar-toggle").on("click", function() {
                     $(this).toggleClass("active");
                });
           });

           /*========== MOBILE MENU ==========*/
           $('.mobile_menu_btn').jPushMenu({
                closeOnClickLink: false
           });
           $('.dropdown-toggle').dropdown();

           /*========== REVOLUTION SLIDER ==========*/
           /* ----- Home Page 4 ----- */
           if ($("#fullscreen_hero_video").length > 0) {
                var tpj = jQuery;
                var revapi279;
                tpj(document).ready(function() {
                     if (tpj("#fullscreen_hero_video").revolution == undefined) {
                          revslider_showDoubleJqueryError("#fullscreen_hero_video");
                     } else {
                          revapi279 = tpj("#fullscreen_hero_video").show().revolution({
                               sliderType: "hero",
                               sliderLayout: "fullscreen",
                               dottedOverlay: "none",
                               delay: 9000,
                               navigation: {},
                               responsiveLevels: [1200, 992, 768, 480],
                               visibilityLevels: [1200, 992, 768, 480],
                               gridwidth: [1200, 992, 768, 480],
                               lazyType: "none",
                               parallax: {
                                    type: "scroll",
                                    origo: "slidercenter",
                                    speed: 1000,
                                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                               },
                               shadow: 0,
                               spinner: "off",
                               disableProgressBar: "on",
                               hideThumbsOnMobile: "off",
                               hideSliderAtLimit: 0,
                               hideCaptionAtLimit: 0,
                               hideAllCaptionAtLilmit: 0,
                               debugMode: false,
                               fallbacks: {
                                    simplifyAll: "off",
                                    disableFocusListener: false,
                               }
                          });
                     }
                });
           };

           /*========== DATE PICKER ==========*/
           $('.datepicker').datepicker({
                format: "yyyy-mm-dd",
                startDate: new Date(), //Set Min Date Today
                // endDate: "18/12/2020", //Set Max Date
                // datesDisabled: ['16/01/2017', '17/01/2017', '30/01/2017'], //Set Disabled Dates
                autoclose: true,
                todayHighlight: true
           });

           /*========== SELECT PICKER ==========*/
           $('select').selectpicker({
                style: 'btn-select',
                size: 'auto',
                container: 'body',
           });
           if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
                $('select').selectpicker('mobile');
           }

           /*========== BOOKING FORM ==========*/
           $("#booking-form, #horizontal_booking_form, #booking_form_advanced").on('submit', function(e) {
                e.preventDefault();

                const data = {
                     checkin: $("input[name=booking-checkin]").val(),
                     checkout: $("input[name=booking-checkout]").val(),
                     adults: $("select[name=booking-adults]").val(),
                     children: $("select[name=booking-children]").val()
                };

                if (data.adults && data.children && data.checkin && data.checkout) {
                     const link = getBookingLink(data);
                     window.open(link, '_blank');
                }
           });

           /*========== CONTACT FORM ==========*/
           $("#contact-form, #contact-form-page").on('submit', function(e) {
                e.preventDefault();

                //Get input field values from HTML form
                var user_name = $("input[name=name]").val();
                var user_phone = $("input[name=phone]").val();
                var user_email = $("input[name=email]").val();
                var user_subject = $("input[name=subject]").val();
                var user_message = $("textarea[name=message]").val();

                //Data to be sent to server
                var post_data;
                var output;
                post_data = {
                     'user_name': user_name,
                     'user_email': user_email,
                     'user_message': user_message,
                     'user_phone': user_phone,
                     'user_subject': user_subject
                };

                //Ajax post data to server
                $.post('email/email.php', post_data, function(response) {

                     //Response server message
                     if (response.type == 'error') {
                          output = '<div class="notification error"><span class="notification-icon"><i class="fa fa-exclamation" aria-hidden="true"></i></span><span class="notification-text">' + response.text + '</span></div>';
                     } else {
                          output = '<div class="notification success"><span class="notification-icon"><i class="fa fa-check" aria-hidden="true"></i></span><span class="notification-text">' + response.text + '</span></div>';

                          //If success clear inputs
                          $("input, textarea").val('');
                     }

                     $("#notification").html(output);

                     $(".notification").delay(15000).queue(function(next) {
                          $(this).addClass("scale-out");
                          next();
                     });
                     $(".notification").on("click", function() {
                          $(this).addClass("scale-out");
                     });

                }, 'json');
           });

           /*========== SUBSCRIBE FORM ==========*/
           $("#subscribe-form").on('submit', function(e) {
                e.preventDefault();

                //Get input field values from HTML form
                var subscribe_email = $("input[name=subscribe-email]").val();

                //Data to be sent to server
                var post_data;
                var output;
                post_data = {
                     'subscribe_email': subscribe_email,
                };

                //Ajax post data to server
                $.post('email/subscribe.php', post_data, function(response) {

                     //Response server message
                     if (response.type == 'error') {
                          output = '<div class="notification error"><span class="notification-icon"><i class="fa fa-exclamation" aria-hidden="true"></i></span><span class="notification-text">' + response.text + '</span></div>';
                     } else {
                          output = '<div class="notification success"><span class="notification-icon"><i class="fa fa-check" aria-hidden="true"></i></span><span class="notification-text">' + response.text + '</span></div>';

                          //If success clear inputs
                          $("input, textarea").val('');
                     }

                     $("#notification").html(output);

                     $(".notification").delay(15000).queue(function(next) {
                          $(this).addClass("scale-out");
                          next();
                     });
                     $(".notification").on("click", function() {
                          $(this).addClass("scale-out");
                     });

                }, 'json');
           });

           /*========== MAGNIFIC POPUP ==========*/
           $(".magnific-popup, a[data-rel^='magnific-popup']").magnificPopup({
                type: 'image',
                mainClass: 'mfp-with-zoom', // this class is for CSS animation below

                zoom: {
                     enabled: true,
                     duration: 300,
                     easing: 'ease-in-out',
                     fixedContentPos: true,
                     opener: function(openerElement) {
                          return openerElement.is('img') ? openerElement : openerElement.find('img');
                     }
                },

                retina: {
                     ratio: 1, // Increase this number to enable retina image support.
                     replaceSrc: function(item, ratio) {
                          return item.src.replace(/\.\w+$/, function(m) {
                               return '@2x' + m;
                          });
                     }
                }

           });

           $('.image-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                fixedContentPos: true,
                gallery: {
                     enabled: true
                },
                removalDelay: 300,
                mainClass: 'mfp-fade',
                retina: {
                     ratio: 1,
                     replaceSrc: function(item, ratio) {
                          return item.src.replace(/\.\w+$/, function(m) {
                               return '@2x' + m;
                          });
                     }
                }

           });

           $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 300,
                preloader: false,
                fixedContentPos: true,
           });

           /*========== POP OVER & TOOLTIP ==========*/
           $('[data-toggle="popover"]').popover();
           $('[data-toggle="tooltip"]').tooltip({
                animated: 'fade',
                container: 'body'
           });

           /*========== GOOGLE MAP ==========*/
           function initialize() {
                let map;
                let panorama;

                map = new google.maps.Map(document.getElementById('map-canvas'), MAP_CONFIG);

                const template =
                     `<div id="infowindow_content">
                   <p>
                       <strong>${MAP_MARKER.name}</strong><br>
                       ${MAP_MARKER.address}<br>${MAP_MARKER.text}<br>${MAP_MARKER.about}
                   </p>
                </div>`;

                const mapInfo = new google.maps.InfoWindow({ content: template });

                const marker = new google.maps.Marker({
                     position: map.getCenter(),
                     map: map,
                     icon: MAP_MARKER.icon,
                     title: MAP_MARKER.title,
                     maxWidth: 500,
                     optimized: false,
                });
                google.maps.event.addListener(marker, 'click', function() {
                     mapInfo.open(map, marker);
                });
                panorama = map.getStreetView();
                panorama.setPosition(MAP_COORDINATS);
                panorama.setPov( /** @type {google.maps.StreetViewPov} */ ({
                     heading: 265,
                     pitch: 0
                }));

                var openStreet = document.getElementById('openStreetView');
                if (openStreet) {
                     document.getElementById("openStreetView").onclick = function() {
                          toggleStreetView()
                     };
                }

                function toggleStreetView() {
                     var toggle = panorama.getVisible();
                     if (toggle == false) {
                          panorama.setVisible(true);
                     } else {
                          panorama.setVisible(false);
                     }
                }
           }

           //Check if google map div exist
           if ($("#map-canvas").length > 0) {
                google.maps.event.addDomListener(window, 'load', initialize);
           }

           /*========== BACK TO TOP ==========*/
           var amountScrolled = 500;
           var back_to_top = $('#back_to_top');
           $(window).on('scroll', function() {
                if ($(window).scrollTop() > amountScrolled) {
                     back_to_top.addClass('active');
                } else {
                     back_to_top.removeClass('active');
                }
           });
           back_to_top.on('click', function() {
                $('html, body').animate({
                     scrollTop: 0
                }, 500);
                return false;
           });

           /*========== GOOGLE MAP WITH PLACES ==========*/
           const initOurPlaces = () => {
                let mapPalaces;
                let serviceMapPalaces;
                let markerPalaces = [];
                let markerMainPalaces = [];
                let mapInfoPalaces;

                const mapPalacesMarkerIcon = {
                     url: MAP_MARKER.icon,
                     size: new google.maps.Size(20, 31.22),
                     scaledSize: new google.maps.Size(20, 31.22),
                };

                const placesRequest = (type) => {
                     return {
                          location: mapPalaces.getCenter(),
                          radius: MAP_PLACES_RADIUS,
                          types: [type]
                     }
                }

                mapInfoPalaces = new google.maps.InfoWindow();

                const createPlacesMapMarker = (place) => {
                     const markerPalaces = new google.maps.Marker({
                          map: mapPalaces,
                          position: place.geometry.location,
                          title: place.name,
                          icon: mapPalacesMarkerIcon,
                          animation: google.maps.Animation.DROP,
                          optimized: true
                     });

                     markerPalaces.addListener("click", () => {
                          mapInfoPalaces.close();
                          mapInfoPalaces.setContent(markerPalaces.getTitle());
                          mapInfoPalaces.open(markerPalaces.getMap(), markerPalaces);
                     });
                }

                const callbackPlacesMap = (results, status) => {
                     if (status == google.maps.places.PlacesServiceStatus.OK) {
                          results.forEach(palce => {
                               createPlacesMapMarker(palce);
                          })
                     }

                     const markerMainPalaces = new google.maps.Marker({
                          position: mapPalaces.getCenter(),
                          map: mapPalaces,
                          icon: MAP_MARKER.icon,
                          title: MAP_MARKER.title,
                          maxWidth: 500,
                          optimized: false,
                          label: {
                               text: MAP_MARKER.title,
                               className: "our-places__map-label"
                          }
                     });
                }

                const initializePacesMap = (type) => {
                     const mapConfig = { ...MAP_PLACES_CONFIG, styles: MAP_PLACES_STYLES };

                     try {
                          mapPalaces = new google.maps.Map(document.getElementById('places-map'), mapConfig);
                          serviceMapPalaces = new google.maps.places.PlacesService(mapPalaces);

                          const places = placesRequest(type);

                          serviceMapPalaces.nearbySearch(places, callbackPlacesMap);
                     } catch {
                          console.log(' Error initialize places map');
                     }
                }

                const placesTab = $('.our-places__tab');
                const placesActiveClass = '--is-active';

                const showTab = (name) => {
                     placesTab.removeClass(placesActiveClass);

                     $(`.our-places__tab[date-type-paces="${name}"]`).addClass(placesActiveClass);

                     initializePacesMap(name);
                }

                placesTab.click(function() {
                     const name = $(this).attr('date-type-paces');
                     showTab(name);
                });

                showTab('restaurant');

           }

           if ($(".our-places").length > 0) {
                initOurPlaces();
           }
      });
 })(jQuery);