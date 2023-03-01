import React from 'react';
import { ProductCard } from '../../types/product';
import { useCartContext } from '../../context/CartContext';
import VideoPlayer from '../VideoPlayer';
import styles from './Card.module.scss';
import Rating from '../Ratings';
import { formatPrice } from '../../utils';

const Card = ({ id, brand, productName, videoId, image, ratings, price, reviews }: ProductCard) => {
  const { addProductToCart } = useCartContext();
  const onAddToCart = () => addProductToCart(id);

  return (
    <div className={styles.card}>
      <VideoPlayer videoId={videoId} />
      <div className={styles.descriptionContainer}>
        <div className={styles.productImageContainer}>
          <img src={image} alt={productName} />
        </div>
        <div className={styles.productDetailsContainer}>
          <div className={styles.brandName}>{brand}</div>
          <div className={styles.productName}>{productName}</div>
          <Rating rating={ratings} reviews={reviews} />
          <div className={styles.productPrice}>{formatPrice(price)}</div>
          <div className={styles.ctaContainer}>
            <button onClick={onAddToCart}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
