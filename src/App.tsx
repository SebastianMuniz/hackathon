import { useEffect, useState } from 'react';

import { getProducts } from './firebase/api';
import { Product } from './types/product';
import { Card } from './shared'

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
    <div>
      <Card />
    </div>
  )
}

export default App;
