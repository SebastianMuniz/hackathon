import { useEffect, useState } from 'react';
import PageScroll from 'react-page-scroll';
import { isMobile } from 'react-device-detect';
import { Scroll } from '../../types/scroll';
import { Card } from "../../shared";
import useProducts from "../../hooks/useProducts";
import styles from "./Main.module.scss";

const Main = () => {
  const { products, fetchProducts } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsLength = products.length;
  const handleScrollEnd = (obj: Scroll) => {
    setCurrentIndex(obj.currentIndex);
  };

  const renderCards = () => products.map(({ id, brand, name, videoId, image, ratings, price, reviews }) => (
    <Card key={id} id={id} brand={brand} productName={name} videoId={videoId} image={image} ratings={ratings} price={price} reviews={reviews} />
  ));

  useEffect(() => {
    if (isMobile && currentIndex === productsLength - 2) fetchProducts();
  }, [currentIndex, productsLength, fetchProducts]);
    
  return (
    <div className={styles.main}>
      {isMobile
      ? (
        <PageScroll width="100vw" height="100vh" onScrollEnd={handleScrollEnd}>
          {renderCards()}
        </PageScroll>
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
  );
};

export default Main;
