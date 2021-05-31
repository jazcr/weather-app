let mykey = config.MY_KEY;
// let city = "Denver";


function updateDay() {
    var currentDate = moment().format('L');
    $(".currentDay").html(currentDate);
    console.log(currentDate)
}


// 'get weather' function
$(".searchBtn").click(function() {
    let city = $(".inputValue").val();
    let initWeather = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + mykey;
    // let forecastAPI = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=imperial&cnt=5&appid=" + mykey;
    // let lon;
    // let lat;

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
 
});



// function userInputWeather() {
    
    
//     $.ajax({
//         url: forecastAPI,
//         method: "GET"
//     }).then(function(response) {

//     
//     })

