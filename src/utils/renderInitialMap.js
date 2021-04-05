export function renderInitialMap() {
    const latlng = new window.google.maps.LatLng(-34.397, 150.644);
    const options = {
        zoom: 8,
        center: latlng,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP
    }
    const map = new window.google.maps.Map(document.getElementById("map"), options);
    return map;
}
