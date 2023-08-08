import ReactGA from 'react-ga';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './layouts/NavigationBar';
import Footer from './layouts/Footer';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Associations from './pages/Associations';
import Agents from './pages/Agents';
import Rentals from './pages/Rentals';
import About from './pages/About';

function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <NavigationBar />
      <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='agents' element={<Agents />} />
            <Route path='associations' element={<Associations />} />
            <Route path='listings' element={<Listings />} />
            <Route path='rentals' element={<Rentals />} />
          </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
