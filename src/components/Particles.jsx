import React, { useEffect, useRef, useState } from 'react';
import { ParticlesAnim } from '../styledComponents/Particles';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Particles({ anim }) {
  const canvas = useRef();
  const numParticles = 90;
  const particleSize = 20;
  const distance = 400;
  const speed = 0.3;
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const array = [];
    for (let i = 0; i < numParticles; i++) {
      const id = 'particle' + i;
      const sz = Math.floor(Math.random() * particleSize + particleSize / 5);
      array.push(
        <i
          key={id + Math.random()}
          id={id}
          className={'particles'}
          style={{ width: sz, height: sz }}
        ></i>
      );
    }
    setParticles(array);
  }, []);

  useGSAP(
    () => {
      if (anim === true) {
        gsap.set(`.particles`, { x: 0, y: 0 });
        for (let i = 0; i < particles.length; i++) {
          const angle = Math.floor(
            Math.random() * (i + 1 * (360 / numParticles)) +
              i * (360 / numParticles)
          );
          const timeline = gsap.timeline();
          timeline
            .set(`#particle${i}`, {
              scale: 0.35,
              opacity: 0,
              backgroundColor: i % 2 === 0 ? '#5b3023' : '#c49d9a',
            })
            .to(`#particle${i}`, { duration: 0.35, autoAlpha: 1 })
            .to(
              `#particle${i}`,
              {
                x:
                  Math.cos((angle * Math.PI) / -180) *
                  Math.floor(Math.random() * distance + distance / 4),
                y:
                  Math.sin((angle * Math.PI) / -180) *
                  Math.floor(Math.random() * distance + distance / 4),
                scale: 1,
                duration:
                  Math.floor(
                    Math.random() * (speed * 100) + (speed * 100) / 3
                  ) / 100,
                ease: 'power1.in',
                z: 0.01,
                force3D: true,
              },
              '<'
            )
            .to(
              `#particle${i}`,
              {
                autoAlpha: 1,
                z: 0.01,
                force3D: true,
                duration: 0.35,
              },
              '>-.25'
            );
        }
      }
    },
    { scope: canvas, dependencies: [anim] }
  );

  return <ParticlesAnim ref={canvas}>{particles}</ParticlesAnim>;
}

export default Particles;
