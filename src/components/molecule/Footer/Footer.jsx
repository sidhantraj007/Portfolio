import React from 'react';
import styles from './Footer.module.css'
import FooterContent from '../../compound/Footer/FooterContent';
import FooterImage from '../../atom/footer/FooterImage/FooterImage';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.image}>
        <FooterImage/>
      </div>
      <div className={styles.content}> 
      <FooterContent/>
      </div>
    </footer>
  );
};

export default Footer;
