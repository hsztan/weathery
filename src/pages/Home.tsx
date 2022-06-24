import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getForecast } from '../Redux/forecast';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Week from '../components/forecast/Week';
import AddressForm from '../components/forecast/AddressForm';

function Home() {
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const forecast = useSelector((state: any) => state.forecast);

  const handleClick = (event: any) => {
    console.log('handleClick');
    dispatch(getForecast(address) as any);
  }

  const handleChange = (event: any) => {
    setAddress(event.target.value);
  }

  return (
    <div>
      <Header />
      <Week />
      <AddressForm />
      <form>
        <input onChange={handleChange} name="address" type="text" placeholder="Enter address" value={address} />
        <button onClick={handleClick} type='button'>Submit</button>
      </form>
      <p>{ JSON.stringify(forecast)}</p>
      <Footer />
    </div>
  )
}

export default Home
