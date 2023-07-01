import React from 'react';
import ReactGA from "react-ga";


function App() {
  ReactGA.initialize("UA-000000-01");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      Nav Bar first
    </>
  );
}

export default App;
