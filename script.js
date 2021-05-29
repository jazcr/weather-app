var mykey = config.MY_KEY;


//vars for main weather section
var searchBtn = document.querySelector('.searchBtn');
var inputValue = document.querySelector('.inputValue')
var userCity = document.querySelector('.userCity');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var uvIndex = document.querySelector('.uvIndex');
var mainIcon = document.querySelector('.mainIcon')

// vars for cards 
var cardDate = document.querySelector('.cardDate')
var weatherImg = document.querySelector('.weatherImage')

//city names
 let atlanta = document.querySelector('.atlanta')
 let austin = document.querySelector('.austin')
 let chicago = document.querySelector('.chicago')
 let newYork = document.querySelector('.newYork')
 let orlando = document.querySelector('.orlando')
 let sanDiego = document.querySelector('.sanDiego')
 let seattle = document.querySelector('seattle')


var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=' + mykey;

async function startAPI() {
    var response = await fetch(requestUrl)
    var data = await response.json()
    .then(function(data) {
        userCity.textContent=(data.name)
        temp.innerHTML= Math.floor(data.main.temp)
        wind.innerHTML= (data.wind.speed)
        humidity.innerHTML = (data.main.humidity)
        // uvIndex.innerHTML = (data.)
       })
       
}

startAPI();



atlanta.addEventListener('click', async function() {

    const atl = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=' + mykey);
    const atlWeather = await atl.json()
    console.log(atlWeather)

});




// fetch(requestUrl)
//     .then(function(response) {
//     return response.json()

    
//     }).then(function(data) {
//         console.log(data)
//     })

