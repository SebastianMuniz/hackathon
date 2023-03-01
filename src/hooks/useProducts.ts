import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { getProducts } from '../firebase/api';
import { Product } from '../types/product';

const PRODUCTS_LIMIT_MOBILE = 3;
const PRODUCTS_LIMIT_DESKTOP = 4;

const useProducts = () => {
  const [lastVisible, setLastVisible] = useState<any>();
  const [products, setProducts] = useState<Product[]>([]);
  const limit = isMobile ? PRODUCTS_LIMIT_MOBILE : PRODUCTS_LIMIT_DESKTOP;

  const fetchProducts = async () => {
    try {
      const response = (await getProducts(lastVisible, setLastVisible, limit)) as Product[];
      setProducts((prevState) => [
        ...prevState,
        ...response
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, fetchProducts };
};

export default useProducts;
