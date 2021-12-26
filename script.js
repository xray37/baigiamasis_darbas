"use strict"

// header menu burger

let menuTrigger = document.getElementById("mobile-menu-trigger");
let mobileMenu = document.querySelector("header nav");

menuTrigger.addEventListener('click', function() {
  this.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// about section tab navigation

const tabNavigationElements = document.querySelectorAll(".about .tab-navigation li");
const tabContentElements = document.querySelectorAll(".about .tab-content");

function removeActiveClassesFromElements(elements) {
    for (let element of elements) {
        element.classList.remove("active");
    }
}

for (let tabElement of tabNavigationElements) {
    tabElement.addEventListener("click", function() {
        const target = this.dataset.target; // "register" / "apply" / "receive"

        removeActiveClassesFromElements(tabNavigationElements);
        this.classList.add("active");

        removeActiveClassesFromElements(tabContentElements);
        document.querySelector('.tab-content[data-tab="'+target+'"]').classList.add('active');
    });
}

// testimonials section swiper gallery

const swiper = new Swiper('.reviews-swiper', {
  speed: 2000,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 120,
  autoHeight: true,
  loop: true,
  autoplay: {
      delay: 3000,
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },


  breakpoints: {
      800: {
        slidesPerView: 3,
        spaceBetween: 120
      },

      320: {
          slidesPerGroup: 1,
          slidesPerView: 1,
          spaceBetween: 50,
      }
    }
});

//ORAI:
// API key:
// 3938ac6ab938c88279184afe6c675938 & units=metric;
// Get weather data from openweather API

const url = "https://api.openweathermap.org/data/2.5/weather?q=Sint-Niklaas&units=metric&appid=3938ac6ab938c88279184afe6c675938";
const weatherElement = document.getElementById("weather-in-celsius");
const weatherLocation = document.getElementById("city-weather");

function getCurrentWeatherInCelsius() {
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.addEventListener('load', function() {
        const response = JSON.parse(http.response);
        const temperature = Math.round(response.main.temp);

        if (temperature > 0) {
            weatherElement.innerText = "+" + temperature;
        } else {
            weatherElement.innerText = temperature;
        }
    })
    http.send();
}

function getCurrentWeatherLocation(){
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.addEventListener('load', function(){
        const response = JSON.parse(http.response);
        const location = response.name;
        const country = response.sys.country;
        weatherLocation.innerHTML = location + ", " + country;
    })
    http.send();
}

window.addEventListener('load', getCurrentWeatherInCelsius);
window.addEventListener('load', getCurrentWeatherLocation);