import { Header } from './Header';
import {Footer} from './Footer';
import { Outlet } from 'react-router-dom';
import styles from './styles/Layout.module.css'

const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;