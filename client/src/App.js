import React from 'react';
import Layout from './components/Layout/Layout';
import ItemsList from './containers/ItemsList/ItemsList';

function App() {
  return (
    <div className="App">
      <Layout>
        <ItemsList />

        <section>Subscribe</section>
        <section>News</section>
      </Layout>
    </div>
  );
}

export default App;
