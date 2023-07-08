import ReactGA from 'react-ga';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './layouts/NavigationBar';
import Footer from './layouts/Footer';
// import MLBlogo from './assets/images/MLBlogo.png';


import Home from './pages/Home';
import Listings from './pages/Listings';
import Associations from './pages/Associations';
import Agents from './pages/Agents';
import Rentals from './pages/Rentals';

function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <NavigationBar />
      <div className='navbar-spacer footer-spacer'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='agents' element={<Agents />} />
          <Route path='listings' element={<Listings />} />
          <Route path='associations' element={<Associations />} />
          <Route path='rentals' element={<Rentals />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
