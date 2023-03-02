import React from 'react'

import { Product } from '../../types/product'
import leftIcon from '../../icon/angle-left.png'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import styles from './ProductDetails.style'
import Rating from '../Ratings';
import { useCartContext } from "../../context/CartContext";

interface IProductDetailsProps extends Product {
  toggleDetails: () => void
}

const ProductDetails: React.FC<IProductDetailsProps> = ({ id, image, name, price, ratings, description, reviews, toggleDetails }) => {
  const { height, width } = useWindowDimensions()
  const { addProductToCart } = useCartContext();

  return (
    <div style={{ ...styles.container, height }}>
      <div style={styles.headerContainer}>
        <div style={styles.icon} onClick={toggleDetails}>
          <img src={leftIcon} width={20} height={20} />
        </div>
        <div style={styles.title}>
          Product Details
        </div>
      </div>
      <img src={image} height="40%" width={width} />
      <div style={styles.detailsContainer}>
        <div style={{
          fontSize: 24,
          fontWeight: 400
        }}>
          {name}
        </div>
        <Rating rating={ratings} reviews={reviews} />
        <div style={styles.hyperlink}>
          Write & Read Reviews
        </div>
        <div style={styles.priceContainer}>
          {`$${price}`}
        </div>
        <div style={styles.subtitle}>
          PRODUCT OVERVIEW
        </div>
        <div style={styles.descriptionContainer}>
          {description}
        </div>
        <div style={styles.ctaContainer} onClick={() => addProductToCart(id)}>
          ADD TO CART
        </div>
      </div>
    </div>
  )
}

export default ProductDetails