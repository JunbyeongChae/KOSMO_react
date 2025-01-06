import React from 'react'
import YoutubeItem from './YoutubeItem'
import './YoutubeList.css'

const YoutubeList = ({videos}) => {
  console.log(videos)
  return (
    <>
      <ul className="youtubes">
        {videos.map((video, index) => (
          <YoutubeItem key={index} video={video} />
        ))}
      </ul>
    </>
  );
}

export default YoutubeList