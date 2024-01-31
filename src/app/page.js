import Image from 'next/image';
import { Inter } from 'next/font/google';
import SignInOutButton from '@/components/SignInOutButton';
import styles from './page.module.css';
// import { useClient } from 'blitz';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
/*   useClient(); */

  return (
    <main className={styles.main}>
      
 <SignInOutButton /> 
    </main>
  );
};

export default Home;
