import { Coords } from '../../types/types';

async function getForecast({ lat, lng }: Coords): Promise<any> {
  console.log(lat, lng);
  try {
    const response = await fetch(
      `https://api.weather.gov/points/${lat},${lng}`
    );
    const data = await response.json();
    return data?.properties?.forecast;
  } catch (error) {
    console.log(error);
  }
}

export default getForecast;
