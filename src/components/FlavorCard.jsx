import React, { useState } from 'react';

export function FlavorCardBack({ flavor, text, imgUrl, drawing }) {
  return (
    <div className="flavor-card-back">
      <img src={imgUrl} />
      {/* <h4>{flavor}</h4> */}
      <p>{text}</p>
    </div>
  );
}

export function FlavorCardFront({ flavor, drawing }) {
  return (
    <div className="flavor-card-front">
      <img src={drawing} />
      <h4>{flavor}</h4>
    </div>
  );
}
