import React from "react";
import { ProductCard } from "../../types/product";
import ShareButton from '../ShareButton';
import VideoPlayer from "../VideoPlayer";
import styles from "./Card.module.scss";
import Rating from "../Ratings";
import { formatPrice } from "../../utils";
import AddToCart from '../AddToCart';

interface ICardProps extends ProductCard {
  toggleDetails: () => void;
  videoIndex: number;
}

const Card: React.FC<ICardProps> = ({
  id,
  brand,
  productName,
  videoId,
  image,
  ratings,
  reviews,
  price,
  slug,
  hashtags,
  toggleDetails,
  videoIndex,
  stock
}) => {
  return (
    <div className={styles.card}>
      <ShareButton slug={slug} hashtags={hashtags} />
      <VideoPlayer videoId={videoId} videoIndex={videoIndex} />
      <div className={styles.descriptionContainer} onClick={toggleDetails}>
        <div className={styles.productImageContainer}>
          <img src={image} alt={productName} />
        </div>
        <div className={styles.productDetailsContainer}>
          <div className={styles.brandName}>{brand}</div>
          <div className={styles.productName}>{productName}</div>
          <Rating rating={ratings} reviews={reviews} />
          <div className={styles.productPrice}>{formatPrice(price)}</div>
          <AddToCart productId={id} outOfStock={stock === 0} />
        </div>
      </div>
    </div>
  );
};

export default Card;
