//http://api.openweathermap.org/data/2.5/weather?q=London&appid=c9441cf596992de6257ae14ccdca9f81

var weather = 
{
	"coord": {
		"lon": -0.13,
		"lat": 51.51
	},
	"weather": [
	{
		"id": 800,
		"main": "Clear",
		"description": "clear sky",
		"icon": "01n"
	}
	],
	"base": "stations",
	"main": {
		"temp": 287.88,
		"pressure": 1023,
		"humidity": 67,
		"temp_min": 285.15,
		"temp_max": 290.15
	},
	"visibility": 10000,
	"wind": {
		"speed": 3.6,
		"deg": 120
	},
	"clouds": {
		"all": 0
	},
	"dt": 1499896200,
	"sys": {
		"type": 1,
		"id": 5091,
		"message": 0.0043,
		"country": "GB",
		"sunrise": 1499831920,
		"sunset": 1499890394
	},
	"id": 2643743,
	"name": "London",
	"cod": 200
}

var one = document.getElementById('one');
one.innerHTML = weather.name;

var two = document.getElementById('two');
two.innerHTML = weather.base;



