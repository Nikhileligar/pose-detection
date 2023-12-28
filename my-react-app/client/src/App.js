// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/Login';
import SignUp from './pages/signup/signup';
import './App.css'
import SignIn from './pages/login/Login';
import Footer from './components/footer';
import Home from './pages/home';
import { Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScroll from './pages/homeScroll';
import ProfilePage from './components/profile';
import PoseRecognition from './components/PoseDetectionPage';
import WelcomePage from './pages/WelcomeScreen/welcome';
import UserPose from './components/poseDetection2';
import voiceApp from './components/poseVoice';
import YouTubeEmbed from './components/poseVoice';
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
      <Box width="400px" sx={{width:{xl: '1488px'}}} m="auto">
        <Navbar />
      <Routes>
      <Route
            path="/"
            element={<WelcomePage />}
          />
          <Route
              path='/pose'
              element={<PoseRecognition />}
              />
          <Route
              path='/pose2'
              element={<PoseRecognition />}
              />
          <Route
            path="/home"
            element={<Home />}
            />
            <Route
            path="/welcome"
            element={<WelcomePage />}
            />
          <Route
            path="/login"
            element={<SignIn />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/profile"
            element={<ProfilePage />}
          />
        </Routes>
      </Box>
  );
}

export default App;
