import React, { useState, useRef } from 'react';
import { FlavorCardBack, FlavorCardFront } from './FlavorCard';
import { FlavorArray } from '../utils/chocolateFlavors';
import { Card, Flavors } from '../styledComponents/ChocoFlavors';
import gsap from 'gsap';

function ChocolateFlavors() {
  const [hovered, setHovered] = useState(false);
  const flip = useRef(gsap.timeline({ paused: true }));

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

  const cards = FlavorArray.map((flavor, i) => (
    <Card
      onMouseEnter={(e) => mouseHoverAnimation(e)}
      onMouseLeave={(e) => mouseLeaveAnimation(e)}
      className={`flavor-card-${i}`}
    >
      <FlavorCardBack
        imgUrl={flavor.img}
        text={flavor.text}
        flavor={flavor.flavor}
        drawing={flavor.drawing}
      />
      <FlavorCardFront flavor={flavor.flavor} drawing={flavor.drawing} />
    </Card>
  ));
  return <Flavors>{cards}</Flavors>;
}

export default ChocolateFlavors;
