import React, { createContext, useState, useContext, Dispatch, SetStateAction } from 'react'

type VideoContextType = {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const VideoContext = createContext<VideoContextType>({
  currentIndex: 0,
  setCurrentIndex: () => {},
})

export const useVideoContext = () => useContext(VideoContext);

export function VideoProvider({ children }: {children: JSX.Element}) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <VideoContext.Provider value={{ currentIndex, setCurrentIndex }}>
      {children}
    </VideoContext.Provider>
  )
}
