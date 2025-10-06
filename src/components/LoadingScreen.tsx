import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start logo fade-in after a brief delay
    const fadeInTimer = setTimeout(() => {
      setShowLogo(true);
    }, 300);

    // Start fade-out after logo is shown for a while
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Complete loading and show homepage
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 3500);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className='loading-content'>
        <div className={`logo-container ${showLogo ? 'logo-fade-in' : ''}`}>
          <img src='/logo.png' alt='Praxis Logo' className='logo-image' />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
