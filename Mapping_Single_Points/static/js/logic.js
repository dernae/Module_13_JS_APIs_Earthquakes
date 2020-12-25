// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//assign the variable map to the object L.map(), and  instantiate the object with the given string 'mapid'.
//The mapid will reference the id tag in our <div> element on the index.html file.
//zoom level of "4" on a scale 0–18.
let map = L.map('mapid').setView([40.7, -94.5], 4);

//Alternative to setView method 
// This method is useful when we need to add multiple tile layers, or a background image of our map(s),
//// Create the map object with a center and zoom level.
//let map = L.map("mapid", {
    //center: [
      //40.7, -94.5
    //],
    //zoom: 4
  //});

// We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    //maxZoom: 18,
    //mapbox.streets, which will show the streets on the map.
    //id: 'mapbox.streets',
    //accessToken: API_KEY
//});
// Then we add our 'graymap' tile layer to the map.
//addTo() function will add the graymap object tile layer to our let map.
//streets.addTo(map);

//updated code
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
//addTo() function will add the graymap object tile layer to our let map.
streets.addTo(map);

//format for marker 
//var marker = L.marker([51.5, -0.09]).addTo(map);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    // varying size circle markers with popup information
    radius: city.population/100000
  })
  // format the population with a thousands separator by using the toLocaleString() method on the city.population in the bindPopup()
  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
.addTo(map);
});

 //Alternative 
 //for (let i = 0; i < cities.length; i++)

//To change the marker on our map to a point or dot, we'll use the circle() function.
//L.circleMarker([34.0522, -118.2437], {
  //adjust the radius so that it's bigger and easier to see.
  //radius: 300,
  //color: "black",
  //fillcolor:'ffffa1'
  //creates a light-yellow circle with black lines indicating a 300-pixel radius on a dark map. 
//}).addTo(map);

// We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}'
