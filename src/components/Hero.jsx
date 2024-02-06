import React, { useEffect, useRef, useState } from 'react';
import { Hero as Container } from '../styledComponents/Hero';
import useInterval from 'use-interval';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Hero() {
  const contents = [
    {
      title: 'Bientot la Saint Valentin',
      baseline: "L'amour est doux, tout comme nos chocolats",
      img: 'https://images.squarespace-cdn.com/content/v1/5ad395ba36099b72e4432660/1549476023532-EC5YMD4IWGSI1VTXR6Q4/IMG_1168.jpg?format=2500w',
    },
    {
      title: 'Les Gateaux Chocolela',
      baseline: 'Decouvrez notre large selection de gateaux artisanal',
      img: 'https://chocolela.fr/wp-content/uploads/2023/03/20230318_175214-scaled.jpg',
    },
    {
      title: 'Decouvrez toutes nos parfums',
      baseline: 'Chocolats 100% reunnionais',
      img: 'https://pulakoschocolates.com/cdn/shop/files/2L2A8881Banner_General1_web_2000x.jpg?v=1613523569',
    },
  ];
  const [selected, setSelected] = useState(0);
  const current = contents[selected];
  const imageWindow = useRef();

  useGSAP(() => {
    const imgs = gsap.utils.toArray('.img-hero');
    imgs.forEach((img, i) => {
      gsap.set(`#img-hero-${i}`, { y: i * 100 + '%' });
    });
    gsap.set(`#dot-hero-${selected}`, { opacity: '100%' });
  }, []);

  const swipe = (selected) => {
    const tl = gsap.timeline({ paused: true });
    const dots = gsap.utils.toArray('.dot-hero');
    const imgs = gsap.utils.toArray('.img-hero');

    dots.forEach((dot, i) => {
      if (i === selected) {
        tl.to(dot, { opacity: '100%' }, '<');
      } else {
        tl.to(dot, { opacity: '30%' }, '<');
      }
    });

    imgs.forEach((img, i) => {
      tl.to(
        img,
        {
          y: 100 * i - 100 * selected + '%',
        },
        '<'
      );
    });

    tl.play();
  };

  useInterval(() => {
    setSelected((prev) => {
      if (prev === 2) {
        return 0;
      } else return prev + 1;
    });
  }, 6000);

  useEffect(() => {
    swipe(selected);
  }, [selected]);

  return (
    <Container>
      <div className="overlay-hero" />
      {contents.map((obj, i) => (
        <img src={obj.img} className="img-hero" id={`img-hero-${i}`} />
      ))}
      <div className="text-hero">
        <h2>{current.title}</h2>
        <h3>{current.baseline}</h3>
      </div>
      <div className="dots-hero">
        <span
          className="dot-hero"
          id="dot-hero-0"
          onClick={() => setSelected(0)}
        ></span>
        <span
          className="dot-hero"
          id="dot-hero-1"
          onClick={() => setSelected(1)}
        ></span>
        <span
          className="dot-hero"
          id="dot-hero-2"
          onClick={() => setSelected(2)}
        ></span>
      </div>
    </Container>
  );
}

export default Hero;
