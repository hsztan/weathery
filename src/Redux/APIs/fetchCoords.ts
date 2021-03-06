import { Coords } from '../../types/types';

async function fetchCoords(address: string): Promise<Coords> {
  try {
    const endpoint = `https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${address}&benchmark=Public_AR_Current&format=json`;
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/${endpoint}`,
      {
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://geocoding.geo.census.gov',
        },
      }
    );
    const data = await response.json();
    const coords = data.result.addressMatches[0].coordinates;
    return {
      lat: coords.y,
      lng: coords.x,
    };
  } catch (error) {
    console.log(error);
  }
  return { lat: 0, lng: 0 };
}

export default fetchCoords;
