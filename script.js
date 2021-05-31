let mykey = config.MY_KEY;
let cityList = [];
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

            let forecastAPI = 'https://api.openweathermap.org/data/2.5/onecall?lat='+ lat +'&lon='+ lon +'&exclude=hourly,minutely,alerts&units=imperial&appid=' + mykey;

    $.ajax({
        url: forecastAPI,
        method: "GET"
    }).then(function(response) {
        console.log(response)

        //sections for each card -- 5 day forecast
        $("#uvIndex").text(response.current.uvi)

        let uv = (response.current.uvi)
        console.log(uv);

        if (uv < 3) {
            $(".uvIndex").addClass('uvGreen');
        } else if (uv >= 3 || uv < 6) {
            $(".uvIndex").addClass('uvYellow');
        } else if (uv >= 6 || uv < 8) {
            $(".uvIndex").addClass('uvOrange');
        } else if (uv >= 8 || uv < 11) {
            $(".uvIndex").addClass('uvRed');  
        } else {
            $(".uvIndex").addClass('uvPurp');  
        }


            $(".cardDate0").text(moment().add(1, 'days').format('L'))
            $(".weatherIcon0").html("<img src=\"http://openweathermap.org/img/wn/" + response.daily[0].weather[0].icon + ".png\">");
            $(".cardTemp0").text(Math.floor(response.daily[0].temp.day))
            $(".cardWind0").text(response.daily[0].wind_speed)
            $(".cardHumidity0").text(response.daily[0].humidity)

            $(".cardDate1").text(moment().add(2, 'days').format('L'))
            $(".weatherIcon1").html("<img src=\"http://openweathermap.org/img/wn/" + response.daily[1].weather[0].icon + ".png\">");
            $(".cardTemp1").text(Math.floor(response.daily[1].temp.day))
            $(".cardWind1").text(response.daily[1].wind_speed)
            $(".cardHumidity1").text(response.daily[1].humidity)

            $(".cardDate2").text(moment().add(3, 'days').format('L'))
            $(".weatherIcon2").html("<img src=\"http://openweathermap.org/img/wn/" + response.daily[2].weather[0].icon + ".png\">");
            $(".cardTemp2").text(Math.floor(response.daily[2].temp.day))
            $(".cardWind2").text(response.daily[2].wind_speed)
            $(".cardHumidity2").text(response.daily[2].humidity)

            $(".cardDate3").text(moment().add(4, 'days').format('L'))
            $(".weatherIcon3").html("<img src=\"http://openweathermap.org/img/wn/" + response.daily[3].weather[0].icon + ".png\">");
            $(".cardTemp3").text(Math.floor(response.daily[3].temp.day))
            $(".cardWind3").text(response.daily[3].wind_speed)
            $(".cardHumidity3").text(response.daily[3].humidity)

            $(".cardDate4").text(moment().add(5, 'days').format('L'))
            $(".weatherIcon4").html("<img src=\"http://openweathermap.org/img/wn/" + response.daily[4].weather[0].icon + ".png\">");
            $(".cardTemp4").text(Math.floor(response.daily[4].temp.day))
            $(".cardWind4").text(response.daily[4].wind_speed)
            $(".cardHumidity4").text(response.daily[4].humidity)


            
            })
        })



});

