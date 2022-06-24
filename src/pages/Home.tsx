import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getForecast } from '../Redux/forecast';
import Header from '../components/shared/Header';
import Week from '../components/forecast/Week';
import AddressForm from '../components/forecast/AddressForm';

function Home() {
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const forecast = useSelector((state: any) => state.forecast.forecast);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(getForecast(address) as any);
  }

  useEffect(() => {
    if (!forecast || forecast.length === 0) {
      setMessage('Please enter a valid address');
    } else {
      setMessage('');
    }
  }, [forecast]);


  return (
    <div className='bg-secondary'>
      <Header />
      {forecast?.length > 0 ?
        <Week /> :
        null}
      <AddressForm address={address}
        setAddress={setAddress}
        handleSubmit={handleSubmit}
        message={message}
      />
    </div>
  )
}

export default Home
