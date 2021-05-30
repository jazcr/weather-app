var mykey = config.MY_KEY;

var initWeather = 'http://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=' + mykey;

$.ajax({
    url: initWeather,
    method: "GET"
  }).then(function(response) {
    
    $(".userCity").text(response.name);
    $(".mainIcon").html("<img src=\"http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png\">");
    console.log(response.weather[0].icon);
    $(".temp").text(Math.floor(response.main.temp));
    $(".wind").text(response.wind.speed);
    $(".humidity").text(response.main.humidity);
console.log(response)

  })