import ReactPlayer from 'react-player/youtube';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import styles from './Card.module.scss';

const MOCK_IMAGE = "https://scontent01.fabfitfun.com/ecom/images/2023/2/438000000-date-night-min-bo-037-1-800-2.jpg";

const Card = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      <div className={styles.cardHeaderContainer as any}>
        <div className={styles.headerBrandText}>BRAND: ########</div>
        <div className={styles.headerProductText}>PRODUCT NAME: #######</div>
      </div>
      <ReactPlayer
        width={width}
        height={height}
        muted
        playing
        url="https://www.youtube.com/shorts/7uzB_wVf1t8?modestbranding=0"
        loop
      />
      <div className={styles.descriptionContainer}>
        <div className={styles.productImageContainer}>
          <img src={MOCK_IMAGE} />
        </div>
        <div className={styles.productDetailsContainer}>
          <div className={styles.brandName}>BRAND NAME</div>
          <div className={styles.productName}>Product Name</div>
          <div className={styles.starsContainer}>
            stars
          </div>
          <div className={styles.productPrice}>
            $3.00
          </div>
          <div className={styles.ctaContainer}>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
