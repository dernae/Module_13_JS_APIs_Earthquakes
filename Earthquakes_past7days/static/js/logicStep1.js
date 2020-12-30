// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//assign the variable map to the object L.map(), and  instantiate the object with the given string 'mapid'.
//The mapid will reference the id tag in our <div> element on the index.html file.
// Create the map object with center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);


//updated code
// We create the tile layer that will be the background of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
//addTo() function will add the graymap object tile layer to our let map.
//streets.addTo(map);

// We create the dark view tile layer that will be an option for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
//In the base layer code, the Street and Dark keys set the text,
let baseMaps = {
  "Satellite Streets": satelliteStreets,
  "Streets": streets
};

//Alternative to seView() method
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  //default
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Having the tileLayer() method before accessing large datasets ensures that the map gets loaded before the data is added to it.
// Accessing the Toronto airline routes GeoJSON URL.
//let quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
//https://raw.githubusercontent.com/<Github_name>/Mapping_Earthquakes/master/majorAirports.json

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});
