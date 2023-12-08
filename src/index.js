function displayTemperature(response){
    console.log(response.data.temperature.current);
    let temperatureElement= document.querySelector('#temperatures');
    let temperatureValue = response.data.temperature.current;
    temperatureElement.innerHTML = Math.round(temperatureValue);
    let h1 = document.querySelector('h1');
    h1.innerHTML = response.data.city;
    
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

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener('submit', handleSearch);

searchCity('Kumasi');