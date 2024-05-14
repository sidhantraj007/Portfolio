import React from 'react';
import Styles from './Navigation.module.css'
class Navigation extends React.Component {
  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.Home}>
        <button onClick={() => this.handleButtonClick('home')}>Home</button>
        </div>
        <div>
        <button onClick={() => this.handleButtonClick('awards')}>Awards</button>
          </div>
          <div>
          <button onClick={() => this.handleButtonClick('teaching')}>Teaching</button>
          </div>
        <div>
        <button onClick={() => this.handleButtonClick('publications')}>Publications</button>
         </div>        
       
        
        
      </div>
    );
  }


}

export default Navigation;
