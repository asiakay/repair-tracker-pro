import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { app } from '@/lib/firebaseClient';
import AuthContext, { AuthProvider} from '@/contexts/AuthContext';

function MyApp ({ Component, pageProps }) {
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