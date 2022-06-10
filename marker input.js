// Defining Global variables

var map;

// Function which creates map
function initMap() {
  // Map options
  var options = {
    center: { lat: 28.7041, lng: 77.1025 },
    zoom: 8,
  };
  // New Map
  map = new google.maps.Map(document.getElementById("map3d"), options);
}
