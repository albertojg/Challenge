function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    // center: {lat: -33.8688, lng: 151.2195},
      center: {lat: 1.3521, lng: 103.8198},
    zoom: 10
  });
  var input = (document.getElementById('pac-input'));

  var autocomplete = new google.maps.places.Autocomplete(input);
  //Use bindTo() to bias the results to the map's viewport, even while that viewport changes.
  autocomplete.bindTo('bounds', map);

  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      // map.setZoom(17);  // Why 17? Because it looks good.
    }


  });
}
