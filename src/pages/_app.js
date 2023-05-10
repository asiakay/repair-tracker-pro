import '@/styles/globals.css';
import styles from '@/styles/variables.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { app } from '@/lib/firebaseClient';
import AuthContext, { AuthProvider} from '@/contexts/AuthContext';
import '../styles/theme.scss';
import Layout from '@/components/Layout';

const variables = {
  primaryColor: styles.primaryColor,
};

function MyApp ({ Component, pageProps }) {
  useEffect(() => {

    if (typeof window !== 'undefined') {
      app;
    } 
  }, []);


  return (
    <AuthProvider> {/* // AuthProvider is a component that is shared across all the pages of your application. */}
      <Layout // Layout is a component that is shared across all the pages of your application.
      >

      <Component // Component is the current page being rendered by Next.js 
      {
        ...pageProps // pageProps is an object with the initial props that were preloaded for your page by one of our data fetching methods, otherwise it's an empty object.
        } /> {/* // pageProps will be exposed as props to the component for each page that is rendered. */}
      </Layout>
    </AuthProvider>
  )
}

if(typeof window !== "undefined"){ // if the typeof window is not undefined, then we are in the browser and we can load the bootstrap javascript
}

export default MyApp;