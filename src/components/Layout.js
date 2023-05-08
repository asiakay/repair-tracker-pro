import React from 'react';
import NavigationBar from './NavigationBar';


const Layout = ({ children }) => { // children is a prop passed to Layout component from _app.js
  return (
      <div> 
        <NavigationBar />
        {children} {/* // children is a prop passed to Layout component from _app.js. it is the current page being rendered by Next.js */}
     </div>
     );
};

export default Layout;
