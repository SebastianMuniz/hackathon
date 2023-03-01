import React from 'react';
import { CartProvider } from './context/CartContext';
import Main from './pages/Main';
import Layout from './shared/Layout';

function App() {
  return (
    <CartProvider>
      <Layout>
        <Main />
      </Layout>
    </CartProvider>
  );
}

export default App;
