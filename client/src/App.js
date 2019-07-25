import React from 'react';
import Layout from './containers/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <div>
          <p>Welcome to Zeus project!</p>
        </div>
        <section>Subscribe</section>
        <section>News</section>
      </Layout>
    </div>
  );
}

export default App;
