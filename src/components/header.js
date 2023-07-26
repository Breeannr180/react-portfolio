import React from 'react';
import Nav from './Nav';

const Header = (props) => {
  return (
    <header>
      <h1>BreeAnn Bond</h1>
      <Nav {...props}/>
    </header>
  );
};

export default Header;