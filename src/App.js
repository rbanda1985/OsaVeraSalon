import Navbar from './components/Navbar';
import './App.css';
import './index.css';
import SalonName from './components/SalonName';
import Footer from './components/Footer';
import Banner from './components/Banner';
import hairImage from './assets/hair-service.jpg'
import lashesImage from './assets/lashes.jpg'
import beautyImage from './assets/beauty-service.jpg'
import nailImage from './assets/nail-polish.jpg';
import StylistGallery from './components/StylistGallery';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SalonName />
      <div className='banner-group'>
      <Banner image={hairImage} title='Hair' alt='Hair'/>
      <Banner image={lashesImage} title='Lashes' alt='Lashes'/>
      <Banner image={beautyImage} title='Makeup' alt='Makeup'/>
      <Banner id='nail' image={nailImage} title='Nails' alt='Nail Polish' />
      </div>
      <div className='salon-services'>
        <p>OsaVera Salon is proud to be your one stop shop for all of your salon and beauty needs. We have professionals at our salon that specialize in hair, nails, make-up, and lashes. </p>
      </div>
      <div className='stylist-heading' id='stylist'>
        <h2>Meet our salon professionals</h2>
        <StylistGallery />
      </div>
      <Footer />
    </div>
  );
}

export default App;
