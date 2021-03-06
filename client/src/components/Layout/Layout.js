import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = props => {
  return (
    <Aux>
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </Aux>
  );
};

export default Layout;
