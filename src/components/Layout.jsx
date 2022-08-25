import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';

function Layout() {
  return (
    <Fragment>
      <main className='App'>
        <Navbar />
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
