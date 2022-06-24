import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Week from '../components/forecast/Week';
import AddressForm from '../components/forecast/AddressForm';

function Home() {
  return (
    <div>
      <Header />
      <Week />
      <AddressForm />
      <Footer />
    </div>
  )
}

export default Home
