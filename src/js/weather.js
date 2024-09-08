//Отримати погоду за допомогою OpenWeatherMap API Опис:
// Використайте публічне API OpenWeatherMap для отримання поточної погоди.
// Зробіть GET - запит за адресою https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY},
// де { city } - назва міста, а { API_KEY } - ваш ключ API OpenWeatherMap.
// Перегляньте отримані дані щодо погоди.
// 330b744defd43ed1455c603bbd093d4f
const body = document.querySelector("body");
const city = "Kyiv";
const APIKey = "330b744defd43ed1455c603bbd093d4f";
const weather = fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // body.insertAdjacentHTML("afterbegin", createWeatherCard(data));
  });

// createWeatherCard = (weather) => {
//   return (weather = `<div class="weather__card">
//     <h2 class="weather__city">${weather.name}</h2>
//     <p class="weather__temp">${weather.main}</p>
//     <p class="weather__visibility">${weather.visibility}</p>
//     <p class="weather__wind">${weather.wind}</p>
//   </div>`);
// };


// Використовуючи AJAX, створіть функцію, яка буде відправляти GET - запит до публічного API
//     (наприклад, https://newsapi.org/) та отримувати список статтей по ключовому слову.