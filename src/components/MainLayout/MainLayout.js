import React from 'react';
import './MainLayout.css';
import Header from './Header';

function MainLayout({ children, location }) {
  return (
    <div className="mainlayout-normal">
      <Header location={location} />
      <div className="mainlayout-content">
        <div className="mainlayout-main">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
