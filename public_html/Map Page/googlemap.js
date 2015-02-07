function initialize() {
    var centerlocation = new google.maps.LatLng(40, -100);
    var mapOptions = {
        center: centerlocation,
        zoom: 4
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    /* Klein Oak High School */

    var KleinOakMarker = new google.maps.Marker({
        position: new google.maps.LatLng(30.096874,-95.517951),
        animation: google.maps.Animation.DROP,
        title: "Klein Oak High School"
    });

    var KleinOakContent = '<div id="content">'+
        '<h1 id="firstHeading" class="heading"><b>Klein Oak High School</b></h1>'+
        '<div class="bodyContent">'+
        '<p>The founding school of Zeta Omicron.</p>'+
        '<p>School Website: <a href="http://kleinoak.kleinisd.net/">'+
        'http://kleinoak.kleinisd.net/</a></p>'+
        '</div>'+
        '</div>';

    var KleinOakInfoWindow = new google.maps.InfoWindow({
        content: KleinOakContent
    });

    KleinOakMarker.setMap(map);
    google.maps.event.addListener(KleinOakMarker, 'click', function() {
        KleinOakInfoWindow.open(map,KleinOakMarker);
    });

    /* Berkeley High School */

    var BerkeleyHSMarker = new google.maps.Marker({
        position: new google.maps.LatLng(37.867118, -122.271383),
        animation: google.maps.Animation.DROP,
        title: "Berkeley High School"
    });

    var BerkeleyHSInfoWindow = new google.maps.InfoWindow({

    });

    BerkeleyHSMarker.setMap(map);
    google.maps.event.addListener(BerkeleyHSMarker, 'click', function() {
        BerkeleyHSInfoWindow.open(map, BerkeleyHSMarker);
    });
}
google.maps.event.addDomListener(window, 'load', initialize);