import React, { useState, useRef, useEffect } from 'react';
import { FlavorCardBack, FlavorCardFront } from './FlavorCard';
import { FlavorArray } from '../utils/chocolateFlavors';
import {
  Card,
  ChocoPage,
  FlavorsGrid,
  RightCornerImage,
} from '../styledComponents/ChocoFlavors';
import rightCornerIllustration from '../assets/flavors/cocoa-right-border.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function ChocolateFlavors() {
  const mouseHoverAnimation = (e) => {
    const card = gsap.utils.selector(e.currentTarget);
    gsap.set(card, {
      transformStyle: 'preserve-3d',
      transformPerspective: 1000,
    });

    const front = card('.flavor-card-front');
    const back = card('.flavor-card-back');
    gsap.set(back, { rotationY: -180, visibility: 'visible' });

    gsap.to(front, { duration: 0.2, rotationY: 180 });
    gsap.to(back, { duration: 0.2, rotationY: 0 });
    gsap.to(card, { z: 50 });
    gsap.to(card, { z: 0, delay: 0.5 });
  };

  const mouseLeaveAnimation = (e) => {
    const card = gsap.utils.selector(e.currentTarget);
    gsap.set(card, {
      transformStyle: 'preserve-3d',
      transformPerspective: 1000,
    });

    const front = card('.flavor-card-front');
    const back = card('.flavor-card-back');

    gsap.to(card, { z: 0, delay: 0.5 });
    gsap.to(card, { z: 50 });
    gsap.to(back, { duration: 0.2, rotationY: 180 });
    gsap.to(front, { duration: 0.2, rotationY: 0 });

    // gsap.set(back, { rotationY: -180, visibility: 'hidden' });
  };

  const cards = FlavorArray.map((flavor, i) => {
    if (i === 3) {
      return <div></div>;
    } else
      return (
        <Card
          onMouseEnter={(e) => mouseHoverAnimation(e)}
          onMouseLeave={(e) => mouseLeaveAnimation(e)}
          className={`flavor-card-${i}`}
          key={i + 'flavorCard'}
        >
          <FlavorCardBack
            imgUrl={flavor.img}
            text={flavor.text}
            flavor={flavor.flavor}
            drawing={flavor.drawing}
          />
          <FlavorCardFront flavor={flavor.flavor} drawing={flavor.drawing} />
        </Card>
      );
  });
  return (
    <ChocoPage>
      <h2>Nos Parfums de chocolats</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor
        dui, luctus non aliquam achurle. consectetur adipiscing elit.
      </p>

      <FlavorsGrid>
        {cards}
        <RightCornerImage src={rightCornerIllustration} />
      </FlavorsGrid>
    </ChocoPage>
  );
}

export default ChocolateFlavors;
