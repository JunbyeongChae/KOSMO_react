import React from 'react'

const YoutubeItem = ({video}) => {
  return (
    <>
      <li className='videli'>
        <div className='videodiv'>
          <img className='thumb' 
          src={video.snippet.thumbnails.medium.url} 
          alt="video thumbnail" />
          <div className='videoinfo'>
            <p className='ptitle'>{video.snippet.title}</p>
            <p className='cptitle'>{video.snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    </>
  )
}

export default YoutubeItem