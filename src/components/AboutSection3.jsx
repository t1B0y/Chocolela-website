import React, { useRef } from 'react';
import { AboutBlock3 } from '../styledComponents/AboutPage';
import Image5 from '../assets/about/about5.jpeg';
import Image6 from '../assets/about/about6.jpeg';
import Image7 from '../assets/about/about7.jpeg';

import Paddle4 from '../assets/about/paddle4.svg';
import Paddle5 from '../assets/about/paddle5.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function AboutSection3() {
  const block = useRef();
  useGSAP(
    () => {
      gsap.set('.about-img7', { y: 120 });
      gsap.set('.about-img6', { y: 120 });

      const scroll3 = gsap.timeline({
        scrollTrigger: {
          trigger: block.current,
          start: `top bottom`,
          end: `bottom bottom`,
          scrub: true,
          markers: true,
        },
      });
      scroll3.to('.about-img7, .about-img6', { y: 0 });
    },
    { scope: block.current }
  );
  return (
    <AboutBlock3 ref={block}>
      <div className="about-img6">
        <img src={Image6} />
      </div>
      <div className="about-img5">
        <img src={Image5} />
      </div>
      <div className="about-img7">
        <img src={Image7} />
      </div>
      <img className="paddle-4" src={Paddle4} />
      <img className="paddle-5" src={Paddle5} />
      <h3 className="block3-title">Commande en gros</h3>
      <p className="block3-paragraph">
        Morbi vitae dapibus ex. Ut scelerisque nisi vel lectus consectetur, nec
        cursus ipsum suscipit. Proin viverra enim quis volutpat sollicitudin.
        Sed non elit non diam euismod efficitur vel mollis nibh. Duis accumsan
        tortor eu diam finibus sagittis.
      </p>
    </AboutBlock3>
  );
}

export default AboutSection3;
