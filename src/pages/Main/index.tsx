import React, { useEffect, useState } from 'react';
import PageScroll from 'react-page-scroll';
import { isMobile } from 'react-device-detect';
import { Scroll } from '../../types/scroll';
import { Card, ProductDetails } from "../../shared";
import { Product } from '../../types/product'
import useProducts from "../../hooks/useProducts";
import { useCartContext } from '../../context/CartContext';
import { useVideoContext } from '../../context/VideoContext';
import styles from "./Main.module.scss";

const Main = () => {
  const { products, fetchProducts } = useProducts();
  const { currentIndex, setCurrentIndex } = useVideoContext();
  const [selectedProduct, setSelectedProduct] = useState<Product>({} as Product)
  const [showProductDetails, setShowProductDetails] = useState(false)
  const { setShowCart } = useCartContext();
  const productsLength = products.length;

  const toggleDetails = () => setShowProductDetails(!showProductDetails)
  const renderCards = () => products.map(({ id, brand, name, videoId, image, ratings, price, reviews, hashtags, slug, stock }, index) => (
    <Card key={id} id={id} brand={brand} productName={name} videoId={videoId} image={image} ratings={ratings} price={price} reviews={reviews} hashtags={hashtags} slug={slug} videoIndex={index} toggleDetails={toggleDetails} stock={stock} />
  ));
  const handleScrollEnd = (obj: Scroll) => {
    setCurrentIndex(obj.currentIndex);
  };
  const handleScrollInit = () => setSelectedProduct(products[0])
  const handleScrollStart = (obj: { targetIndex: number }) => {
    setSelectedProduct(products[obj.targetIndex]);
  };

  useEffect(() => {
    if (isMobile && currentIndex === productsLength - 2) fetchProducts();
  }, [currentIndex, productsLength, fetchProducts]);

  useEffect(() => {
    setShowCart(!showProductDetails)
  }, [showProductDetails])
    
  return productsLength ? (
    <div className={styles.main}>
      {isMobile ? (
        showProductDetails ? <ProductDetails {...selectedProduct} toggleDetails={toggleDetails} /> : (
          <PageScroll width="100vw" height="100vh" onScrollEnd={handleScrollEnd} onScrollInit={handleScrollInit} onScrollStart={handleScrollStart}>
            {renderCards()}
          </PageScroll>
        )
      ) : (
        <>
          <h1>Shop FabFitFun Video Feed</h1>
          <div className={styles.products}>
            {renderCards()}
          </div>
          {!isMobile && productsLength > 0 && (
            <button className={styles.loadMore} onClick={fetchProducts}>
              Load More
            </button>
          )}
        </>
      )}
    </div>
  ) : null;
};

export default Main;
