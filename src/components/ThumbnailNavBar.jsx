import React from 'react';
import { ThumbnailNav } from '../styledComponents/NavBar';

function ThumbnailNavBar({ text, url }) {
  return (
    <ThumbnailNav>
      <div className="img-thumbnail-nav">
        <img src={url} />
      </div>
      <div className="text-thumbnail-nav">{text}</div>
    </ThumbnailNav>
  );
}

export default ThumbnailNavBar;
