import React from 'react';
import image from '../../assets/HeaderLogo.svg';

function Header() {
  return (
    <header>
      <div>
        <image src={image} alt="Logo" />
      </div>
    </header>
  );
}

export default Header;
