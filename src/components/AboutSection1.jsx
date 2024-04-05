import React, { useRef } from 'react';
import Image1 from '../assets/about/about1.jpeg';
import Image2 from '../assets/about/about2.jpeg';
import Image3 from '../assets/about/about3.jpg';
import Paddle1 from '../assets/about/paddle1.svg';
import Paddle2 from '../assets/about/paddle2.svg';
import Paddle3 from '../assets/about/paddle3.svg';
import { AboutBlock1 } from '../styledComponents/AboutPage';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function AboutSection1() {
  return (
    <AboutBlock1 className="block1">
      <div className="block-1-img3">
        <img src={Image3} />
      </div>
      <div className="block-1-img2">
        <img src={Image2} />
      </div>
      <div className="block-1-img1">
        <img src={Image1} />
      </div>
      <img className="paddle1" src={Paddle1} />
      <img className="paddle2" src={Paddle2} />
      <img className="paddle3" src={Paddle3} />
      <div className="block-1-title">
        <span className="block-1-title-text">CHOCOLELA</span>
      </div>
      <div className="block-1-baseline">
        <span className="block-1-baseline-text">Une entreprise artisanale</span>
      </div>
      <div className="block-1-paragraph">
        <div className="block-1-paragraph-line">
          <span className="block-1-paragraph-line-text">
            Lorem ipsum dolor sit amet, consectetur
          </span>
        </div>
        <div className="block-1-paragraph-line">
          <span className="block-1-paragraph-line-text">
            adipiscing elit. Donec at massa
          </span>
        </div>
        <div className="block-1-paragraph-line">
          <span className="block-1-paragraph-line-text">
            lectus. Nullam et enim porta sem interdum
          </span>
        </div>
        <div className="block-1-paragraph-line">
          <span className="block-1-paragraph-line-text">
            auctor. Nam placerat quam sed dui consequat,
          </span>
        </div>
        <div className="block-1-paragraph-line">
          <span className="block-1-paragraph-line-text">
            eget dignissim justo pellentesque. In quis
          </span>
        </div>
        <div className="block-1-paragraph-line">
          <span className="block-1-paragraph-line-text">
            tempus lacus. Quisque at quam tortor. Integer
          </span>
        </div>
        <div className="block-1-paragraph-line">
          <span className="block-1-paragraph-line-text">
            Duis erat erat,vitae malesuada mi.hendrerit a odio vitae, feugiat
            sagittis lacus.
          </span>
        </div>
      </div>
    </AboutBlock1>
  );
}

export default AboutSection1;
