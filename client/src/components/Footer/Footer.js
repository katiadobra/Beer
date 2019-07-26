import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="page-footer">
      <ul>
        <li>
          <a href="/">How to order</a>
        </li>
        <li>
          <a href="/">Catalog</a>
        </li>
        <li>
          <a href="/">Instagram</a>
        </li>
        <li>
          <a href="/">Facebook</a>
        </li>
        <li>
          <smal>Copyright @ 2019 Beer ♥</smal>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
