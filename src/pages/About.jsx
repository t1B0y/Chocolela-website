import React, { useRef } from 'react';
import { AboutPage } from '../styledComponents/AboutPage';

import Image4 from '../assets/about/about4.jpg';

import AboutSection1 from '../components/AboutSection1';
import AboutSection2 from '../components/AboutSection2';
import AboutSection3 from '../components/AboutSection3';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function About() {
  const block = useRef();
  const test = useRef();
  const vh = (coef) => window.innerHeight * (coef / 100);
  const vw = (coef) => window.innerWidth * (coef / 100);

  useGSAP(
    () => {
      //first scroll animations
      gsap.set(
        '.block-1-title-text, .block-1-baseline-text, .block-1-paragraph-line-text',
        {
          y: '100%',
          opacity: 0,
        }
      );
      gsap.set('.block-1-img3', { y: '20vw' });
      const init = gsap.timeline();
      init.to('.block-1-title-text', { y: 0, opacity: 1, duration: 0.5 });
      init.to(
        '.block-1-baseline-text',
        { y: 0, opacity: 1, duration: 0.5 },
        '>-0.3'
      );
      init.to(
        '.block-1-paragraph-line-text',
        { y: 0, opacity: 1, duration: 0.5 },
        '>-0.3'
      );

      const scroll1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.block1',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      scroll1.to('.block-1-img1', { y: '-5vw' });
      scroll1.to('.block-1-img3', { y: '8vw' }, '<');

      // anim block 2

      gsap.set('.block-2-image', { scale: 0.3 });
      gsap.set('.block-2-title-text, .block-2-paragraph-line-text', {
        y: '100%',
        opacity: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.block2',
          start: `bottom ${vh(12)}`,
        },
      });
      tl.to('.block-2-title-text', { y: 0, opacity: 1, duration: 1 }, '>');
      tl.to(
        '.block-2-paragraph-line-text',
        { y: 0, opacity: 1, duration: 0.5 },
        '>-=0.5'
      );

      const scroll2 = gsap.timeline({
        scrollTrigger: {
          trigger: '.block2',
          start: `top top+=7%`,
          end: `bottom top`,
          scrub: true,
          pin: block.current,
          once: true,
          onLeave: function (self) {
            self.scroll(self.start); // <-- sets position to start of ScrollTrigger
            self.disable();
            self.animation.progress(1);
          },
        },
      });
      scroll2.to('.block-2-image', { scale: 1 });
    },
    { scope: block.current }
  );
  return (
    <AboutPage ref={block}>
      <AboutSection1 />
      <div className="block2">
        <AboutSection2 />
      </div>
      <div className="block3">
        <AboutSection3 />
      </div>
    </AboutPage>
  );
}

export default About;
