import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const Layout = ({ children }) => { // children is a prop passed to Layout component from _app.js
  return (
      <div> 
        <NavigationBar />
        {children} {/* // children is a prop passed to Layout component from _app.js. it is the current page being rendered by Next.js */}
    <Footer />
     </div>
     );
};

export default Layout;
