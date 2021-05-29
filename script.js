var mykey = config.MY_KEY;


//vars for main weather section
var searchBtn = document.querySelector('.searchBtn');
var inputValue = document.querySelector('.inputValue')
var userCity = document.querySelector('.userCity');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var uvIndex = document.querySelector('.uvIndex');

// vars for cards 
var cardDate = document.querySelector('.cardDate')
var weatherImg = document.querySelector('.weatherImage')

var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Edison&appid=' + mykey;

fetch(requestUrl)
    .then(function(response) {
    return response.json()

    
    }).then(function(data) {
        console.log(data)
    })

