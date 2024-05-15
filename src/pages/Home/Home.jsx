import React from 'react'
import Navbar from '../../components/molecule/Navbar/Navbar'
import Navigation from '../../components/molecule/Navigation/Navigation';
import Dashboard from '../../components/molecule/Dashboard/Dashboard';
import Footer from '../../components/molecule/Footer/Footer';
import Slider from '../../components/molecule/Slider/Slider';

const Home = () => {
  return (

   <div>
     <Navbar/>
     <Navigation/>
     <Slider/>
     <Dashboard/>
     <Footer/>
   </div>
    
  );
};

export default Home;