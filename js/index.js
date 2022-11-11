//  SEARCH FOR COUNTRIES SECTION
let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country-inp");

searchBtn.addEventListener("click", () => {
  let countryName = countryInput.value;
  console.log(countryName);
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].continents[0]);
      console.log(Object.keys(data[0].currencies)[0]);
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(", ")
      );
      result.innerHTML = `
      <img src="${data[0].flags.svg}"
      class= "flag-img">
      <h2>${data[0].name.common}</h2>
      <div class = "wrapper">
        <div class = "data-wrapper">
          <h4>Capital:</h4>
          <span>${data[0].capital[0]}</span>
        </div>
        <div class = "data-wrapper">
        <h4>Continent:</h4>
        <span>${data[0].continents[0]}</span>
      </div>
      <div class = "data-wrapper">
      <h4>Population:</h4>
      <span>${data[0].population}</span>
    </div>
      <div class = "data-wrapper">
        <h4>Currency:</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${
        Object.keys(data[0].currencies)[0]
      }</span>
      </div>
      <div class = "data-wrapper">
        <h4>Languages:</h4>
        <span>${Object.values(data[0].languages)
          .toString()
          .split(",")
          .join(", ")}</span>
      </div>
      </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty</h3>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
      }
    });
});

/**DISPLAY GALLERY OF CITIES TO VISIT***/
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

/***DISPLAY DESTINATIONS OBJECTS***/

//Class that holds properties for one destination
/*class Destination {
  constructor(city, country, attractions) {
    this.city = city;
    this.country = country;
    this.attractions = attractions;
  }
}

// Class that holds a collection of destinations and properties and functions for the group
class Destinations {
  constructor() {
    this.destinations = [];
  }

  newDestination(city, country, attractions) {
    let p = new Destination(city, country, attractions);
    this.destinations.push(p);
    return p;
  }

  get allDestinations() {
    return this.destinations;
  }
  get allCities() {
    let cities = [];
    for (let i = 0; i < this.destinations.length; i++) {
      cities.push(this.destinations[i].city);
    }
    return cities;
  }

  get allAtractions() {
    let attractions = [];
    for (let i = 0; i < this.destinations.length; i++) {
      attractions.push(this.destinations[i].attractions);
    }
    return attractions;
  }

  get country() {
    return this.destinations[0].country;
  }
}

let GreeceDestination = new Destinations();
GreeceDestination.newDestination(
  "santorini",
  "Greece",
  "breathtaking views around every corner "
);
GreeceDestination.newDestination(
  "athens",
  "Greece",
  "Athens has a wealth of historic sites for visitors to enjoy"
);
GreeceDestination.newDestination(
  "Crete",
  "Greece",
  "Besides Minoan ruins, visitors can also still see the remains of Ancient Greece"
);
GreeceDestination.newDestination(
  "Piraeus",
  "Greece",
  "Piraeus is the gateway to Greece’s innumerable islands"
);

// list all the players

console.log(GreeceDestination.allDestinations);
console.log(GreeceDestination.numberOfDestinations);
console.log(GreeceDestination.allCities);
console.log(GreeceDestination.country);
console.log(GreeceDestination.allAtractions);

let buttonGreece = document.getElementById("exploreGreece");
buttonGreece.addEventListener("click", showPopularDestinations);

function showPopularDestinations() {
  document.getElementById("destination-city").innerHTML =
    GreeceDestination.allCities[0];

  document.getElementById("destination-country").innerHTML =
    GreeceDestination.country;
  document.getElementById("destination-details").innerHTML =
    GreeceDestination.allAtractions[0];

  document.getElementById("destination-city").innerHTML =
    GreeceDestination.allCities[1];

  document.getElementById("destination-country").innerHTML =
    GreeceDestination.country;
  document.getElementById("destination-details").innerHTML =
    GreeceDestination.allAtractions[1];

  document.getElementById("destination-city").innerHTML =
    GreeceDestination.allCities[2];

  document.getElementById("destination-country").innerHTML =
    GreeceDestination.country;
  document.getElementById("destination-details").innerHTML =
    GreeceDestination.allAtractions[2];
}*/
