let mykey = config.MY_KEY;
// let city = "Denver";


function updateDay() {
    var currentDate = moment().format('L');
    $(".currentDay").html(currentDate);
    console.log(currentDate)
}




function userInputWeather() {
    // let city = $(".inputValue").val();
    let initWeather = 'http://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=' + mykey;
    console.log(initWeather)

    $.ajax({
        url: initWeather,
        method: "GET"
        }).then(function(response) {
            lat = response.coord.lat;
            lon = response.coord.lon;
            $(".userCity").text(response.name);
            $(".mainIcon").html("<img src=\"http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png\">");
            $(".temp").text(Math.floor(response.main.temp));
            $(".wind").text(response.wind.speed);
            $(".humidity").text(response.main.humidity);
            console.log(response)
        })
 
};

userInputWeather();

