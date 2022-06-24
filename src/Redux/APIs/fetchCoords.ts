import { Coords } from '../../types/types';

async function fetchCoords(address: string): Promise<Coords> {
  //Hardcoded lat and lng for now for address: '4600 Silver Hill Rd, Washington, DC 20233'
  // try {
  //   const response = await fetch(
  //     `https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${address}&benchmark=Public_AR_Current&format=json`,
  //     {
  //       mode: 'no-cors',
  //       headers: {
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     }
  //   );
  //   console.log(response);
  //   const data = await response.json();
  //   const coords = data.result.addressMatches[0].coordinates;
  //   return {
  //     lat: coords.y,
  //     lng: coords.x,
  //   };
  // } catch (error) {
  //   console.log(error);
  // }
  return { lat: 38.845989080537514, lng: -76.9274328556918 };
}

export default fetchCoords;
