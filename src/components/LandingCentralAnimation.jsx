import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

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
