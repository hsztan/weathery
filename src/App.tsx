import './App.css';
import { useState, useEffect } from 'react';
import getCoords from './APIs/getCoords';
import getForecast from './APIs/getForecast';

function App() {
  const [coords, setCoords] = useState({lat: 0, lng: 0});
  const [forecast, setForecast] = useState({});
  getCoords('4600 Silver Hill Rd, Washington, DC, 20233').then(data => setCoords({...data}));

  useEffect(() => {
    getForecast(coords).then(data => setForecast(data));
    console.log(forecast);
  }, []);
  

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>{JSON.stringify(coords)}</p>
    </div>
  );
}

export default App;
