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
      console.log(data.properties.periods);
      return data.properties.periods;
    }
  } catch (error) {
    console.log(error);
  }
}

export default fetchForecast;
