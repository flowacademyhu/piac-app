import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  const location = useLocation();

  return (
    <div
      className={
        location.pathname === '/'
          ? 'header market-header'
          : 'header vendor-header'
      }
    >
      {location.pathname === '/' ? 'Piacok' : 'Árusok'}
    </div>
  );
};

export default Header;
