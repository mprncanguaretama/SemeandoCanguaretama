
const apiKey = "7ebebc49d795c24f42c313400671fc9e";


const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const coutryElement = document.querySelector("#coutry");
const windElement = document.querySelector("#wind span");
const humidityElement = document.querySelector("#humidity span");

const weatherContainer = document.querySelector("#weather-data");

//funções
const getWeatherData = async(city) =>{
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    console.log(data);
    return data;
}


const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );
  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;

   weatherContainer.classList.remove("hide");

};


// eventos


searchBtn.addEventListener("click", (e) => {
e.preventDefault();

const city = cityInput.value;


showWeatherData(city);

});


cityInput.addEventListener("keyup", (e) => {

if(e.code === "Enter") {
const city = e.target.value;
showWeatherData(city);
}
})


