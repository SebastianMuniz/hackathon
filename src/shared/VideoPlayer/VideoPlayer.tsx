import React from 'react';
import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { isMobile } from 'react-device-detect';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import styles from './VideoPlayer.module.scss';

type VideoPlayerProps = {
  videoId: string;
}

const VideoPlayer = ({ videoId }: VideoPlayerProps) => {
  const [playing, setPlaying] = useState<boolean>(isMobile);
  const [played, setPlayed] = useState(0);
  const { height, width } = useWindowDimensions();
  const playerHeight = isMobile ? height : '501px';
  const playerWidth = isMobile ? width : '282px';

  const handlePlay = () => setPlaying((prevState) => !prevState);
  return (
    <div onMouseEnter={handlePlay} onMouseLeave={handlePlay}>
      <progress className={styles.videoProgress} max={1} value={played} />
      <ReactPlayer
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
