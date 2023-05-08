import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

import { app } from '@/lib/firebaseClient';
import AuthContext, { AuthProvider} from '@/contexts/AuthContext';
import '../styles/theme.scss';

function MyApp ({ Component, pageProps }) {
  useEffect(() => {

    if (typeof window !== 'undefined') {
      app;
    } 
  }, []);


  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

if(typeof window !== "undefined"){
  app;
}

export default MyApp;