window.addEventListener('load', () => {
let long;
let lat;
let temperatureDescription = document.querySelector('.temperature-description');
let temperatureDegree = document.querySelector('.temperature-degree');
let locationTimezone = document.querySelector('.location-timezone');

if(navigator.geolocation){
navigator.geolocation.getCurrentPosition
(position =>{
long = position.coords.longitude;
lat = position.coords.latitude;

const proxy = "https://cors-anywhere.herokuapp.com/";
const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767221ad1/${lat},-${long}`;


fetch(api)
.then(response => {
return response.json();
})
.then(data => {
    
    const {temperature, summary, icon} = data.currently;
    // set DOM elements from API
    temperatureDegree.textContent = temperature;
    temperatureDescription.textContent = summary;
    locationTimezone.textContent = data.timezone;
     });

    });
  }

function setIcons(icon, iconID){
  const skycons = new skycons({color : white});
  const currentIcon = icon.replace(/-/g, "_").toUpperCase();
  skycons.play();
  return skycons.set(iconID, Skycons[currentIcon]);
}
});

//https://youtu.be/wPElVpR1rwA?t=1966


