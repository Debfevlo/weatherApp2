function handleSearch(event){
    event.preventDefault();
    let searchValue = document.querySelector('#search-value');
    let storingValue = searchValue.value;
    let h1 = document.querySelector('h1');
    h1.innerHTML = storingValue;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener('submit', handleSearch);