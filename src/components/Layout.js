import React from 'react';
import NavigationBar from './NavigationBar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <div className="container">{children}</div>
      <footer>Copyright © Repair Tracker Pro</footer>
    </div>
  );
};

export default Layout;
