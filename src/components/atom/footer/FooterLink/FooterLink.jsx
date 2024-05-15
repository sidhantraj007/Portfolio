import React from 'react';

const FooterLink = ({ text, href }) => {
  return (
    <a href={href}>{text}</a>
  );
};

export default FooterLink;
