import React, { useState } from 'react';
import {
  DiscoverTextBlock,
  DiscoverBlock,
} from '../styledComponents/LandingPage';
import LandingCentralAnimation from './LandingCentralAnimation';

function DiscoverProductLanding() {
  const [centralContent, setCentralContent] = useState({
    img: 'http://chocolela.s3.amazonaws.com/wp-content/uploads/2024/01/25013955/choco-discover.png',
    text: 'Decouvrez notre gamme de chocolats artisanaux fait uniquement de chocolats valhrona. Nous proposons des ballotins, tablettes et meme differentes forme selons les fetes',
  });
  const [isAnimReversed, setIsAnimReversed] = useState(false);

  const map = {
    chocolate: {
      img: 'http://chocolela.s3.amazonaws.com/wp-content/uploads/2024/01/25013955/choco-discover.png',
      text: 'Decouvrez notre gamme de chocolats artisanaux fait uniquement de chocolats valhrona. Nous proposons des ballotins, tablettes et meme differentes forme selons les fetes',
    },
    cake: {
      img: 'http://chocolela.s3.amazonaws.com/wp-content/uploads/2024/01/25013953/cake-discover.png',
      text: 'Nos Gateaux et patisseries sont confectionnes a la commande. tous nos produits sont frais et de qualite',
    },
    gift: {
      img: 'http://chocolela.s3.amazonaws.com/wp-content/uploads/2024/01/25014000/gift-image.png',
      text: 'Chocolela fait aussi des coffrets cadeaux. Que cela soit pour la Saint-Valentins, Paques, Noel venex decouvrir nos coffret cadeaux qui ravirons vos proches',
    },
  };

  const handleHover = (name) => {
    setCentralContent({
      img: map[name].img,
      text: map[name].text,
    });
    setIsAnimReversed((prev) => !prev);
  };

  return (
    <DiscoverBlock className="home-first-block">
      <span className="discover-circle" />
      <DiscoverTextBlock
        name="chocolate"
        onMouseEnter={() => handleHover('chocolate')}
        // onMouseLeave={() => setIsAnimReversed(true)}
      >
        <img
          src="http://chocolela.s3.amazonaws.com/wp-content/uploads/2024/01/25001514/choco-icon.svg"
          className="discover-text-img"
        />

        <span className="discover-text-title">Les Chocolats</span>
        <p className="discover-text-paragraph">
          Notre selection de chocolats artisanaux. Fabrication 100% reunnionaise
        </p>
      </DiscoverTextBlock>
      <DiscoverTextBlock
        name="cake"
        // onMouseLeave={() => setIsAnimReversed(true)}
        onMouseEnter={() => handleHover('cake')}
      >
        <img
          src="http://chocolela.s3.amazonaws.com/wp-content/uploads/2024/01/25001513/cake-icon.svg"
          className="discover-text-img"
        />

        <span className="discover-text-title">Les Gateaux</span>
        <p className="discover-text-paragraph">
          Chocolela confectionne egalement des gateaux et patisseries
        </p>
      </DiscoverTextBlock>
      <DiscoverTextBlock
        name="gift"
        // onMouseLeave={() => setIsAnimReversed(true)}
        onMouseEnter={() => handleHover('gift')}
      >
        <img
          src="http://chocolela.s3.amazonaws.com/wp-content/uploads/2024/01/25001516/gift-icon.svg"
          className="discover-text-img"
        />

        <span className="discover-text-title">Les Cadeaux</span>
        <p className="discover-text-paragraph">
          Pensez a nous pour vos idee cadeaux.
        </p>
      </DiscoverTextBlock>
      <LandingCentralAnimation
        img={centralContent.img}
        text={centralContent.text}
        isReversed={isAnimReversed}
      />
    </DiscoverBlock>
  );
}

export default DiscoverProductLanding;
