import React from 'react';
import Styles from './Navigation.module.css'
import NavigationItems from '../../compound/Navigation/NavigationItems';
class Navigation extends React.Component {
  render() {
    return (
      <div className={Styles.container}>
        <NavigationItems/>
      </div>
    );
  }


}

export default Navigation;
