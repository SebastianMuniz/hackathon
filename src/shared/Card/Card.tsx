import ReactPlayer from 'react-player/youtube'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import getStyles from './Card.style'


const Card = () => {
  const { height, width } = useWindowDimensions();
  const bottomWidth = width * 0.9
  const styles = getStyles({ width, bottomWidth })

  return (
    <div>
      <div style={styles.cardHeaderContainer as any}>
        <div style={styles.headerBrandText}>BRAND: ########</div>
        <div style={styles.headerProductText}>PRODUCT NAME: #######</div>
      </div>
      <ReactPlayer
        width={width}
        height={height}
        muted
        playing
        url="https://www.youtube.com/shorts/7uzB_wVf1t8"
        loop
      />
      <div style={styles.cardContainer as any}>
        LEARN MORE
      </div>
    </div>
  )
}

export default Card