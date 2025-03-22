const apiKey = "44cd53b2fdc82e4145c5ac9149f8f108";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?nuits=metric&q=";

const serchBox = document.querySelector('.search input');
const serchBtn = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else {
        var data = await response.json();
        console.log(data);
    
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273.15) + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main === "Clouds") {
           weatherIcon.src = 'cloudes.png';
        } else if(data.weather[0].main === "Clear") {
            weatherIcon.src = 'sunny.png';
        } else if(data.weather[0].main === "Rain") {
            weatherIcon.src = 'rain.png';
        } else if(data.weather[0].main === "Drizzle") {
            weatherIcon.src = 'drizzle.png';
        } else if(data.weather[0].main === "Mist") {
            weatherIcon.src = 'mist.png';
        }else if(data.weather[0].main === "Snow") {
            weatherIcon.src = 'snow.png';
        }else if(data.weather[0].main === "Hail") {
            weatherIcon.src = 'hail.jpeg';
        }else if(data.weather[0].main === "Rainbow") {
            weatherIcon.src = 'rainbow.png';
        }else if(data.weather[0].main === "Moon") {
            weatherIcon.src = 'mood.png';
        }
    
        document.querySelector('.weather').style.display = 'block';
        serchBox.value = '';
        document.querySelector('.error').style.display = 'none';
    }
}

serchBtn.addEventListener('click', () => {
    checkWeather(serchBox.value);
});