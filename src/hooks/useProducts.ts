import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { onGetProducts } from '../firebase/api';
import { Product } from '../types/product';

const PRODUCTS_LIMIT_MOBILE = 3;
const PRODUCTS_LIMIT_DESKTOP = 4;
const LIMIT = isMobile ? PRODUCTS_LIMIT_MOBILE : PRODUCTS_LIMIT_DESKTOP;

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [limit, setLimit] = useState<number>(LIMIT); 
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  const fetchProducts = () => {
    if (limit === displayedProducts.length) {
      setLimit((prevState) => prevState + LIMIT);
    }
  }

  useEffect(() => {
    onGetProducts((docs: any) => {
      let arr: any[] = [];
      docs.forEach((post: any) => {
        arr.push(post.data());
      });
      setProducts(arr);
    });
  }, []);

  useEffect(() => {
    if (products.length) {
      setDisplayedProducts(products.slice(0, limit));
    }
  }, [limit, products]);

  return { products: displayedProducts, fetchProducts };
};

export default useProducts;
