import fetchForecast from './APIs/fetchForecast';
import fetchCoords from './APIs/fetchCoords';

const GET_FORECAST = 'GET_FORECAST';
const SET_LOADING = 'SET_LOADING';

const initialState = {
  forecast: [],
  isLoading: false,
};

export default function forecast(state = initialState, action: any) {
  switch (action.type) {
    case GET_FORECAST:
      return { ...state, forecast: action.payload, isLoading: false };
    case SET_LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

export const getForecast = (address: string) => async (dispatch: any) => {
  dispatch({ type: SET_LOADING });
  const coords = await fetchCoords(address);
  const forecast = await fetchForecast(coords);
  dispatch({ type: GET_FORECAST, payload: forecast });
};
