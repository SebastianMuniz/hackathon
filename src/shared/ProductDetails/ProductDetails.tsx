import React from 'react'

import leftIcon from '../../icon/angle-left.png'
import cartIcon from '../../icon/cart-shopping.png'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import styles from './ProductDetails.style'

interface IProductDetailsProps {
  image: string
  title: string
  rating: number
  price: number
  description: string
}


const ProductDetails: React.FC<IProductDetailsProps> = ({ image, title, price, rating, description }) => {
  const { height, width } = useWindowDimensions()
  return (
    <div style={{ ...styles.container, height }}>
      <div style={styles.headerContainer}>
        <div style={styles.icon}>
          <img src={leftIcon} width={20} height={20} />
        </div>
        <div style={styles.title}>
          Product Details
        </div>
        <div style={styles.icon}>
          <img src={cartIcon} width={20} height={20} />
        </div>
      </div>
      <img src={image} height="40%" width={width} />
      <div style={styles.detailsContainer}>
        <div style={{
          fontSize: 24,
          fontWeight: 400
        }}>
          {title}
        </div>
        <div style={styles.raitingsContainer}>{rating}</div>
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
        <div style={styles.ctaContainer}>
          ADD TO CART
        </div>
      </div>
    </div>
  )
}

export default ProductDetails