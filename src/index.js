function displayTemperature(response){
    console.log(response.data.temperature.current);
    let temperatureElement= document.querySelector('#temperatures');
    let temperatureValue = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperatureValue);

    let h1 = document.querySelector('h1');
    h1.innerHTML = response.data.city;

    let conditionElement = document.querySelector('#condition')
    conditionElement.innerHTML = response.data.condition.description

    let humidityElement = document.querySelector("#Humidity");
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

    let windyElement = document.querySelector("#windy");
    windyElement.innerHTML = `${response.data.wind.speed}km/h`;

    
let iconElement = document.querySelector('#icon');
iconElement.innerHTML =` <img src="${response.data.condition.icon_url}" class="weather-emoji"></img>`

    let timeElement = document.querySelector('#time');
    let date = new Date(response.data.time * 1000);
    timeElement.innerHTML = formatDate(date);

    getforecast(response.data.city);

    function formatDate(date){
        let minute = date.getMinutes();
        let hour = date.getHours();
       let  days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',

         ]

         if(minute < 10){
            minute = `0${minute}`;
         }
          let day = days[date.getDay()];
          return `${day} ${hour}:${minute}`;
    }

    
}

function searchCity(city){
    let apiKey = 'ff563b340abb1ee5o90065fc5t0af55d';
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    axios.get(apiUrl).then(displayTemperature);

}


function handleSearch(event){
    event.preventDefault();
    let searchValue = document.querySelector('#search-value');
    searchCity(searchValue.value)
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function getforecast(city){
    let apiKey = 'ff563b340abb1ee5o90065fc5t0af55d';
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`
    axios(apiUrl).then(displayForecast)
    console.log(apiUrl)
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener('submit', handleSearch);



function displayForecast(response){
    console.log(response.data)
    let forecastElement= document.querySelector('#forecast');

    
    let forecastHtml = '';


    response.data.daily.forEach(function(day, index){
    if (index < 5 ){

        forecastHtml = forecastHtml + `<div class="day1">
           <div class="monday">${formatDay(day.time)}</div>  
            <div > <img src="${day.condition.icon_url}" alt="" class="image1"> </div>
            <div class="temperature1">
                <span class="weather-forecst-temperature-maximum">
                    ${Math.round(day.temperature.maximum)}&deg
                </span>
                <span class="weather-forecst-temperature-minimun">
                    ${Math.round(day.temperature.minimum)}&deg
                </span> 
            </div>
        </div>
`;
    }
})
 forecastElement.innerHTML = forecastHtml;
}
getforecast('Paris')
searchCity('Kumasi');