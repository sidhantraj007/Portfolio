import React from 'react'
import Navbar from '../../components/molecule/Navbar/Navbar'
import Navigation from '../../components/molecule/Navigation/Navigation';
import Dashboard from '../../components/molecule/Dashboard/Dashboard';

const Home = () => {
  return (

   <div>
     <Navbar/>
     <Navigation/>
     <Dashboard/>
   </div>
    
  );
};

export default Home;