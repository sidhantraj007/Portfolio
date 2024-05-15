import React from 'react';
import styles from './FooterContent.module.css'
import FooterLink from '../../atom/footer/FooterLink/FooterLink';
import FooterImage from '../../atom/footer/FooterImage/FooterImage';

const FooterContent = () => {
  return (
    <div className={styles.container}>
        <p className="text-muted">
      <FooterLink text="Home" href="/" />
      <span> | </span>
      <FooterLink text="Webmail" href="/webmail" />
      <span> | </span>
      <FooterLink text="EE" href="/ee" />
      <span> | </span>
      <FooterLink text="IIT Kanpur" href="/iit-kanpur" />
      <span> | </span>
      Last Update: April 29, 2024
    </p></div>
  );
};

export default FooterContent;
