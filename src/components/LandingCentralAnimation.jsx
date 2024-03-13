import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/confetties2.json';
import Particles from './Particles';

function LandingCentralAnimation({ isReversed, img, text }) {
  return (
    <>
      <div className="discover-central-block">
        <img src={img} />
        <p>{text}</p>
      </div>
    </>
  );
}

export default LandingCentralAnimation;
