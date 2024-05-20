import React from 'react';
import { Route, Router, Routes} from 'react-router-dom';
import Home from '../../../pages/Home/Home';
import Contacts from '../../../pages/ContactPage/Contacts';
import NavigationItems from '../../compound/Navigation/NavigationItems';
import style from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={style.container}>
      <NavigationItems/>
      <Routes>
        <Route  path="/" element={<Home/>}></Route>
        <Route  path="/contacts" element={<Contacts/>}></Route>
        </Routes>
    </div>
  );
};

export default Navigation;
