import ReactGA from "react-ga";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./layouts/NavigationBar";
import Footer from "./layouts/Footer";

import Home from "./pages/Home";
import PropertySearch from "./pages/PropertySearch";
import Associations from "./pages/Associations";
import About from "./pages/About";

function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <NavigationBar />
      <div className='navbar-spacer footer-spacer'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='propertysearch' element={<PropertySearch />} />
          <Route path='associations' element={<Associations />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
