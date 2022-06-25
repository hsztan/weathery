import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/weathery" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
