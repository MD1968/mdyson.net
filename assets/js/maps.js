function initMap() {
    zoom: 3,
    center: {
        lat: 52.332211, lng: -0.906099
    }
});


    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 52.236788, lng: 0.906153 },
        { lat: 51.534288, lng: -0.135965 },
        { lat: 52.583181, lng: -0.241410 },

    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}