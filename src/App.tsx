import React from 'react';
import { CartProvider } from './context/CartContext';
import { VideoProvider } from './context/VideoContext';
import Main from './pages/Main';
import Layout from './shared/Layout';

function App() {
  return (
    <CartProvider>
      <VideoProvider>
        <Layout>
          <Main />
        </Layout>
      </VideoProvider>
    </CartProvider>
  );
}

export default App;
