import React from 'react';
import { ThumbnailNav } from '../styledComponents/NavBar';
import { Link } from 'react-router-dom';

function ThumbnailNavBar({ text, imgUrl, url }) {
  return (
    <ThumbnailNav>
      <Link to={url} className="img-thumbnail-nav">
        <img src={imgUrl} />
      </Link>
      <Link to={url} className="text-thumbnail-nav">
        {text}
      </Link>
    </ThumbnailNav>
  );
}

export default ThumbnailNavBar;
