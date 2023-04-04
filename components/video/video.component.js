// React
import React from 'react';
import ReactPlayer from 'react-player';

// Next

// Contentful

// Components

// Images

// Data

// Styles

const VideoPlayer = ({ url }) => {
  return (
    <div>
      <h2>NextJs VideoPlayer - GeeksforGeeks</h2>
      <ReactPlayer url={url} width='100%'/>
    </div>
  );
};

export default VideoPlayer;
