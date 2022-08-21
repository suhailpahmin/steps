import {apiConfig} from '../../../components/configs';
import axios from 'axios';

interface WeatherData {
  description: string;
  icon: string;
  temperature: number;
}

export const fetchCurrentWeather = (
  latitude: number,
  longitude: number,
): Promise<WeatherData> => {
  const apiKey = '2c0f578a09475663982d0eeaa712b980'; // TO BE REMOVED when getting data from .env is working
  const url = `${apiConfig.currentWeather}${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(response => {
        if (response.data) {
          const data = response.data;
          const weather = data.weather[0];
          const temperature = Math.round(data.main.temp);
          const result: WeatherData = {
            description: weather.description,
            icon: weather.icon,
            temperature: temperature,
          };

          resolve(result);
        }
      })
      .catch(error => reject(error));
  });
};
