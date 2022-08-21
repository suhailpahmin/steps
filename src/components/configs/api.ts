export const apiConfig = {
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  currentWeather: 'https://api.openweathermap.org/data/2.5/weather?lat=',
  apiKey: `${process.env.REACT_APP_WEATHER_API_KEY}`,
  // https://openweathermap.org/img/w/10d.png
  weatherIcon: 'https://openweathermap.org/img/w/',
};
