function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.date.name;
  console.log(response.data);
}
let apiKey = "cb856e0d75ef9e01d9881d38fabef8fe";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
