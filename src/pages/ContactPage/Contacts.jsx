import React from 'react'
import Navbar from '../../components/molecule/Navbar/Navbar'
import Navigation from '../../components/molecule/Navigation/Navigation';
// import Dashboard from '../../components/molecule/Dashboard/Dashboard';
import Footer from '../../components/molecule/Footer/Footer';
// import Slider from '../../components/molecule/Slider/Carousel';
import Contact from '../../components/molecule/Contacts/Contact';
// import { Test } from '../../components/molecule/Test/Test';
// import slides from '../../contents/Carousel/Carousel.json'
import Carousel from'../../components/molecule/Carousel/Carousel'



const Contacts = () => {
  return (

   <div>
     {/* <Navbar/> */}
     {/* <Navigation/> */}
   
     {/* <Dashboard/> */}
       <Contact/>
     <Footer/>
   
   </div>
    
  );
};

export default Contacts;