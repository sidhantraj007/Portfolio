import React from 'react'
import Navbar from '../../components/molecule/Navbar/Navbar'
import Navigation from '../../components/molecule/Navigation/Navigation';
import Dashboard from '../../components/molecule/Dashboard/Dashboard';
import Footer from '../../components/molecule/Footer/Footer';
import Slider from '../../components/molecule/Slider/Slider';
import Contact from '../../components/molecule/Contacts/Contact';

const Home = () => {
  return (

   <div>
     <Navbar/>
     <Navigation/>
     {/* <Slider/>
     <Dashboard/> */}
       <Contact/>
     <Footer/>
   
   </div>
    
  );
};

export default Home;