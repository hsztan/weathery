import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getForecast } from '../Redux/forecast';
import Spinner from '../components/shared/Spinner';
import Header from '../components/shared/Header';
import Week from '../components/forecast/Week';
import AddressForm from '../components/forecast/AddressForm';

function Home() {
  const corsMessage = (<p>This website needs cors-anywhere demo active to work < br /> please visit <a className="text-warning" target="_blank" rel='noreferrer' href="https://cors-anywhere.herokuapp.com/" > cors - anywhere.herokuapp.com</a > to enable it</p>);
  const [address, setAddress] = useState('');
  const [firstSubmit, setFirstSubmit] = useState(false);
  const [message, setMessage] = useState(corsMessage);
  const [isDispatched, setIsDispatched] = useState(false);
  const dispatch = useDispatch();
  const forecast = useSelector((state: any) => state.forecast.forecast);
  const isLoading = useSelector((state: any) => state.forecast.isLoading);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(getForecast(address) as any);
    setAddress('');
    setFirstSubmit(true);
    setIsDispatched(true);
  }

  useEffect(() => {
    if ((!forecast || forecast.length === 0) && isDispatched) {
      setMessage('Please enter a valid address' as any);
    } else if (firstSubmit) {
      setMessage('' as any);
    }
  }, [forecast, isDispatched, firstSubmit]);


  return (
    <div className='bg-secondary'>
      <Header />
      {forecast?.length > 0 ?
        <Week /> :
        null}
      {isLoading ? <Spinner /> :
        <AddressForm address={address}
          setAddress={setAddress}
          handleSubmit={handleSubmit}
          message={message}
        />}
    </div>
  )
}

export default Home
