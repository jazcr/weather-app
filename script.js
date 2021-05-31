let mykey = config.MY_KEY;
// let city = "Denver";


function updateDay() {
    var currentDate = moment().format('L');
    $(".currentDay").html(currentDate);
    console.log(currentDate)
}
updateDay();


// 'get weather' function
$(".searchBtn").click(function(event) {
    event.preventDefault()
    let city = $(".inputValue").val();
    let initWeather = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + mykey;
    let forecastAPI = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon='+ lon +'&exclude=hourly,minutely,alerts' + mykey;
    let lon;
    let lat;

    $.ajax({
        url: initWeather,
        method: "GET"
        }).then(function(response) {
            $(".userCity").text(response.name);
            $(".mainIcon").html("<img src=\"http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png\">");
            $(".temp").text(Math.floor(response.main.temp));
            $(".wind").text(response.wind.speed);
            $(".humidity").text(response.main.humidity);
            console.log(response)
            
            let lat = response.coord.lat;
            let lon = response.coord.lon;

            $.ajax({
                url: forecastAPI,
                method: "GET"
            }).then(function(response) {
                console.log(response)
                // $(".fiveDayFore").text("");
                // for (let i = 0; i < 5; i++) {
                    // $(".cardTemp").text(response.)
            
            })
        })



});

    


// function userInputWeather() {
    
    
//     $.ajax({
//         url: forecastAPI,
//         method: "GET"
//     }).then(function(response) {

//     
//     })

