import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Feature from './Components/Feature';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';

import Category from './Component/Category';
import TopRest from './Component/TopRest';
import OnlineDelivery from './Component/OnlineDelivery';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
      <Category />
      <TopRest />
      <OnlineDelivery />
    </>
  );
}

export default App;
