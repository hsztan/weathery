import fetchForecast from './APIs/fetchForecast';
import fetchCoords from './APIs/fetchCoords';

const GET_FORECAST = 'GET_FORECAST';

export default function forecast(state = {}, action: any) {
  switch (action.type) {
    case GET_FORECAST:
      return { ...state, forecast: action.payload };
    default:
      return state;
  }
}

export const getForecast = (address: string) => async (dispatch: any) => {
  console.log('getForecast');
  const coords = await fetchCoords(address);
  const forecast = await fetchForecast(coords);
  dispatch({ type: GET_FORECAST, payload: forecast });
};
