$(document).ready(function () {
    $("#submitcity").click(function () {
        return getWeather();
    });
});
//function for getWeather
function getWeather() {
    var city = $("#city").val();
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=9c6acd60613ddea7c9822d58856688b6",//api key
            type: "GET",
            dataType: "jsonp",
            success: function (data) {
                var x = showResults(data)
                $("#weather").html(x);
                $("#city").val('');
            }
        });
}
//function for showweather
function showResults(data) {
    return '<h2>' + data.name + ', ' + data.sys.country + '</h2>' + '<h3>Temperature is: ' + data.main.temp + '&deg;C</h3>'+ '<h3>' + data.weather[0].description + '</h3>'
}
