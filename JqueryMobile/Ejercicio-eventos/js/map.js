/*
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */
$(document).on("pageinit", "#map-page", function () {


    var latlng = new google.maps.LatLng(43.049451, -2.497026);
    var myOptions = {
        zoom: 16,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP //change here
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "Pizza Pertutti!"
    });
    
});

//google.maps.event.trigger(MapInstance,'resize');