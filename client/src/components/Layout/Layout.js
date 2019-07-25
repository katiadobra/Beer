import React from 'react';
import Aux from '../../hoc/Aux';

const Layout = props => {
  return (
    <Aux>
      <header>
        <h1>Zeus</h1>
      </header>
      <main>
        {props.children}
      </main>
      <footer>Footer</footer>
    </Aux>
  );
};

export default Layout;
