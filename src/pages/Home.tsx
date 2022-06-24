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

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('handleSubmit');
    dispatch(getForecast(address) as any);
  }

  return (
    <div>
      <Header />
      <Week />
      <AddressForm address={address} setAddress={setAddress } handleSubmit={ handleSubmit} />
      
      <p>{ JSON.stringify(forecast)}</p>
      <Footer />
    </div>
  )
}

export default Home
