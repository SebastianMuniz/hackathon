import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { isMobile } from 'react-device-detect';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useVideoContext } from '../../context/VideoContext';
import styles from './VideoPlayer.module.scss';

type VideoPlayerProps = {
  videoId: string;
  videoIndex: number;
}

const VideoPlayer = ({ videoId, videoIndex }: VideoPlayerProps) => {
  const { currentIndex, setCurrentIndex } = useVideoContext();
  const [playing, setPlaying] = useState<boolean>(false);
  const [played, setPlayed] = useState(0);
  const { height } = useWindowDimensions();
  const playerHeight = isMobile ? height : '501px';
  const playerWidth = isMobile ? ( height * 9 / 16 ) : '282px';

  const handlePlay = () => setPlaying((prevState) => !prevState);

  useEffect(() => {
    if (isMobile) {
      if (currentIndex === videoIndex) {
        setPlaying(true);
      } else {
        setPlaying(false);
      }
    }
  }, [currentIndex]);

  return (
    <div onMouseEnter={handlePlay} onMouseLeave={handlePlay}>
      <progress className={styles.videoProgress} max={1} value={played} />
      <ReactPlayer
        className={styles.videoPlayer}
        width={playerWidth}
        height={playerHeight}
        muted
        playing={playing}
        url={`https://www.youtube.com/shorts/${videoId}?modestbranding=1`}
        loop
        onProgress={(progress) => { setPlayed(progress.played) }}
        progressInterval={10}
      />
    </div>
  );
}

export default VideoPlayer;
