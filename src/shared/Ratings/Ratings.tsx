import React from 'react';
import { BsStarHalf, BsStar, BsStarFill } from 'react-icons/bs' 
import styles from './Ratings.module.scss';

const starsArr = [1, 2, 3, 4, 5];

const Rating = ({
  rating,
  reviews,
}: {
  rating: number;
  reviews: number;
}) => (
  <div className={styles.starsContainer}>
    {starsArr.map((s) => {
      if (s <= rating)
        return (
          <BsStarFill
            size={12}
            className={styles.star}
            key={`solid-star-${s}`}
          />
        );
      if (s > rating && s < rating + 1) {
        return (
          <BsStarHalf
            className={styles.star}
            size={12}
            key={`half-star-${s}`}
          />
        );
      }
      return (
        <BsStar
          className={styles.star}
          size={12}
          key={`regular-star-${s}`}
        />
      );
    })}
    <span className={styles.reviews}>({reviews})</span>
  </div>
);

export default Rating;
