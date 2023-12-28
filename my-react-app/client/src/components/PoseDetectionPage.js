import React, { useRef, useState } from "react";
import * as posenet from "@tensorflow-models/posenet";
import Webcam from "react-webcam";
import { drawKeypoints, drawSkeleton } from "./utilities";

function PoseRecognition() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState(null);

  const runPosenet = async () => {
    const net = await posenet.load({
      inputResolution: { width: 640, height: 480 },
      scale: 0.8,
    });

    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      const pose = await net.estimateSinglePose(video);

      drawCanvas(pose, videoWidth, videoHeight);
      checkPose(pose);
    }
  };

  const drawCanvas = (pose, videoWidth, videoHeight) => {
    const ctx = canvasRef.current.getContext("2d");
    canvasRef.current.width = videoWidth;
    canvasRef.current.height = videoHeight;

    drawKeypoints(pose["keypoints"], 0.6, ctx);
    drawSkeleton(pose["keypoints"], 0.7, ctx);
  };

  const checkPose = (pose) => {
    // Example: Check if the person is maintaining the correct posture for pull-ups
    const nose = pose.keypoints.find((point) => point.part === "nose");
    const leftShoulder = pose.keypoints.find(
      (point) => point.part === "leftShoulder"
    );
    const rightShoulder = pose.keypoints.find(
      (point) => point.part === "rightShoulder"
    );

    // Simple logic: Check if the nose is between the shoulders (assumes a correct pull-up posture)
    const isCorrectPose =
      nose.position.x > leftShoulder.position.x &&
      nose.position.x < rightShoulder.position.x;

    if (!isCorrectPose) {
      setError("Wrong pose! Adjust your posture.");
    } else {
      setError(null);
    }
  };

  runPosenet();

  return (
    <div className="App">
      <header className="App-header">
        <Webcam
          ref={webcamRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        {error && <div style={{ color: "red" }}>{error}</div>}
      </header>
    </div>
  );
}

export default PoseRecognition;



// import React, { useState } from "react";
// // import "./styles.css";
// import YoutubeEmbed from "./poseVoice";

// export default function App() {
//   const [videoId, setVideoId] = useState('');

//   const handleInputChange = (e) => {
//     const url = e.target.value;
//     const videoIdFromUrl = extractVideoId(url);

//     setVideoId(videoIdFromUrl);
//   };

//   const extractVideoId = (url) => {
//     // Regular expression to match YouTube video ID in various URL formats
//     const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
//     const match = url.match(regex);

//     return match ? match[1] : ''; // Return the video ID if found, otherwise an empty string
//   };

//   return (
//     <div className="App">
//       <h1>Youtube Embed</h1>
//       <input type="text" value={videoId} onChange={handleInputChange} />
//       <YoutubeEmbed embedId={videoId} />
//     </div>
//   );
// }


// YouTubePoseRecognition.js

// import React, { useState, useRef, useEffect } from 'react';
// import YouTube from 'react-youtube';
// import * as tf from '@tensorflow/tfjs';
// import * as posenet from '@tensorflow-models/posenet';
// import YoutubeEmbed from "./poseVoice";

// const PoseRecognition = () => {
//   const [videoId, setVideoId] = useState('');
//   const [validUrl, setValidUrl] = useState(true);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const runPoseNet = async () => {
//       const net = await posenet.load();

//       const detectPose = async () => {
//         if (videoRef.current) {
//           const video = videoRef.current.getInternalPlayer(); // Access the YouTube video player
//           const pose = await net.estimateSinglePose(video);

//           // TODO: Implement logic to check for correct pose
//           console.log(pose);
//         }

//         requestAnimationFrame(detectPose);
//       };

//       detectPose();
//     };

//     runPoseNet();
//   }, []);

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
//         <YoutubeEmbed embedId={videoId} opts={opts} ref={videoRef} />
//       ) : (
//         <p>Please enter a valid YouTube URL.</p>
//       )}
//     </div>
//   );
// };

// export default PoseRecognition;

