import React, { useEffect, useState } from 'react';

import { getProducts } from './firebase/api';
import { Product } from './types/product';
import logo from './logo.svg';
import './App.css';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  console.log('products', products);

  const fetchProducts = async () => {
    try {
      const response = await getProducts() as Product[];
      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
