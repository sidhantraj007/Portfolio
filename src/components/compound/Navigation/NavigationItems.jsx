import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../../pages/Home/Home'
import Contacts from '../../../pages/ContactPage/Contacts';
import style from './NavigationItems.module.css'

const NavigationItems = () => {
  return (
    <nav className={style.cantainer}>
      <ul>
        <li>
          <Link to='../../../pages/Home/Home'>Home</Link>
        </li>
        {/* <li>
          <Link to="/publications">Publications</Link>
        </li> */}
        <li>
          <Link to='../../../pages/ContactPage/Contacts'>Contact</Link>
        </li> 
         {/* <li>
          <Link to="/projects">Projects</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavigationItems;
