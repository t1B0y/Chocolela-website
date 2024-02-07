import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/confetties2.json';

function LandingCentralAnimation({ isReversed, img, text }) {
  const lottieRef = useRef(null);
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    lottieRef.current.stop();
    lottieRef.current.play();
  }, [isReversed]);

  return (
    <>
      <div className="discover-central-block">
        <img src={img} />
        <p>{text}</p>
      </div>
      <div className="animation">
        <Lottie
          ref={lottieRef}
          options={defaultOptions}
          height={'33vw'}
          width={'33vw'}
          isStopped={false}
          isPaused={false}
          speed={2}
        />
      </div>
    </>
  );
}

export default LandingCentralAnimation;
