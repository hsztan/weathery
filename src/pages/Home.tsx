import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { getForecast } from '../Redux/forecast';
import Header from '../components/shared/Header';
import Week from '../components/forecast/Week';
import AddressForm from '../components/forecast/AddressForm';

function Home() {
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const forecast = useSelector((state: any) => state.forecast.forecast);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('handleSubmit');
    dispatch(getForecast(address) as any);
  }

  return (
    <div>
      <Header />
      {forecast?.length > 0 ?
        <Week /> :
        null}
      <AddressForm address={address} setAddress={setAddress} handleSubmit={handleSubmit} />
    </div>
  )
}

export default Home
