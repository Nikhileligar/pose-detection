// // YouTubeEmbed.js

// import React, { useState } from 'react';
// import YouTube from 'react-youtube';

// const YouTubeEmbed = () => {
//   const [videoId, setVideoId] = useState('');
//   const [validUrl, setValidUrl] = useState(true);

//   const handleInputChange = (event) => {
//     const inputUrl = event.target.value;
//     setValidUrl(isValidYoutubeUrl(inputUrl));
  
//     if (validUrl) {
//       const urlObject = new URL(inputUrl);
//       const idFromUrl = urlObject.searchParams.get('v') || urlObject.pathname.substring(1);
  
//       setVideoId(idFromUrl);
//     } else {
//       setVideoId('');
//     }
//   };
  

//   const isValidYoutubeUrl = (url) => {
//     // Updated pattern to handle both short-form and long-form YouTube URLs
//     const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|youtu\.be\/))([a-zA-Z0-9_-]{11})/;
//     return pattern.test(url);
//   };

//   const opts = {
//     height: '390',
//     width: '640',
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <div>
//       <label>
//         Enter YouTube URL:
//         <input type="text" value={videoId} onChange={handleInputChange} />
//       </label>
//       {validUrl ? (
//         <YouTube videoId={videoId} opts={opts} />
//       ) : (
//         <p>Please enter a valid YouTube URL.</p>
//       )}
//     </div>
//   );
// };

// export default YouTubeEmbed;



import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;