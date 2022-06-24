import { Coords } from '../../types/types';

async function fetchForecast({ lat, lng }: Coords): Promise<any> {
  console.log(lat, lng);
  try {
    let response = await fetch(`https://api.weather.gov/points/${lat},${lng}`);
    let data = await response.json();
    const forecast = data?.properties?.forecast;
    if (forecast) {
      response = await fetch(forecast);
      data = await response.json();
      const periods = data.properties.periods;
      const days = [];
      for (let i = 0; i < periods.length; i += 2) {
        days.push([periods[i], periods[i + 1]]);
      }
      return days;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default fetchForecast;
