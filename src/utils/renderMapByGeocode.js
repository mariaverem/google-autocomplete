export function renderMapByGeocode(autoCompleteRef, resultsMap) {
    const geocoder = new window.google.maps.Geocoder();
    const address = autoCompleteRef.current.value;
    geocoder.geocode( { address: address}, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            new window.google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
