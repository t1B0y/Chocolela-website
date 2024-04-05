import React, { useRef } from 'react';
import { AboutBlock2 } from '../styledComponents/AboutPage';
import Image4 from '../assets/about/about4.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function AboutSection2() {
  return (
    <AboutBlock2>
      <div className="block-2-background"></div>
      <div className="block-2-title">
        <div className="block-2-title-line">
          <span className="block-2-title-text">Nous choissisons des</span>
        </div>
        <div className="block-2-title-line">
          <span className="block-2-title-text">Produits naturels,</span>
        </div>
        <div className="block-2-title-line">
          <span className="block-2-title-text">reunnionais et sans</span>
        </div>
        <div className="block-2-title-line">
          <span className="block-2-title-text">conservateurs</span>
        </div>
      </div>
      <p className="block-2-paragraph">
        <div className="block-2-paragraph-line">
          <span className="block-2-paragraph-line-text">
            Morbi vitae dapibus ex. Ut scelerisque nisi vel lectus
          </span>
        </div>
        <div className="block-2-paragraph-line">
          <span className="block-2-paragraph-line-text">
            consectetur, nec cursus ipsum suscipit. Proin viverra enim quis
          </span>
        </div>
        <div className="block-2-paragraph-line">
          <span className="block-2-paragraph-line-text">
            volutpat sollicitudin. Sed non elit non diam euismod efficitur vel
          </span>
        </div>
        <div className="block-2-paragraph-line">
          <span className="block-2-paragraph-line-text">
            mollis nibh. Duis accumsan tortor eu diam finibus sagitis. Ut
          </span>
        </div>
        <div className="block-2-paragraph-line">
          <span className="block-2-paragraph-line-text">
            sollicitudin turpis quis justo sollicitudin, eu aliquet tortor
          </span>
        </div>
        <div className="block-2-paragraph-line">
          <span className="block-2-paragraph-line-text">
            aimperdiet. Curabitur quis dapibus massa, non ornare tortor.
          </span>
        </div>
        <div className="block-2-paragraph-line">
          <span className="block-2-paragraph-line-text">
            Etiam dapibus tellus, a ornare massa.
          </span>
        </div>
      </p>
      <div className="block-2-image">
        <img src={Image4} />
      </div>
    </AboutBlock2>
  );
}

export default AboutSection2;
