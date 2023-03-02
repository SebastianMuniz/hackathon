import React from 'react';
import { useCartContext } from '../../context/CartContext';
import styles from './AddToCart.module.scss';

interface IAddToCart {
  productId: number;
  outOfStock: boolean;
}

const AddToCart: React.FC<IAddToCart> = ({ productId, outOfStock }) => {
  const { addProductToCart, removeProductOnCart, isProductOnCart, productsOnCart } = useCartContext();
  const onAddToCart = (e: any) => {
    e.stopPropagation()
    addProductToCart(productId);
  }

  const onRemoveFromCart = (e: any) => {
    e.stopPropagation()
    removeProductOnCart(productId)
  }

  if (outOfStock) {
    return (
      <div className={styles.ctaContainer}>
        <button onClick={(e: any) => { e.stopPropagation() }} className={styles.outOfStock}>OUT OF STOCK</button>
      </div>
    )
  }

  return (
    <div className={styles.ctaContainer}>
      { !isProductOnCart(productId) ? <button className={styles.addButton} onClick={onAddToCart}>ADD TO CART</button> : (
          [
            <button className={styles.removeFromCart} onClick={onRemoveFromCart}>-</button>,
            productsOnCart[productId],
            <button className={styles.addToCart} onClick={onAddToCart}>+</button>,
          ]
      )}
    </div>
  );
};

export default AddToCart;
