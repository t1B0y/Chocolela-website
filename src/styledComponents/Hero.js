import styled from 'styled-components';

export const Hero = styled.section`
  width: 100vw;
  height: 85vh;
  position: relative;
  overflow: hidden;
  img {
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay-hero {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    z-index: 2;
  }
  .text-hero {
    position: absolute;
    top: 40%;
    left: 6%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    max-width: 50%;
    h2 {
      text-transform: uppercase;
      text-align: left;
      color: white;
      font-weight: 800;
      font-size: 2.5em;
      z-index: 3;
      margin: 0 0 0.2em 0;
    }
    h3 {
      text-align: left;

      margin: 0;
      text-transform: uppercase;
      color: white;
      font-weight: 400;
      font-size: 1.3em;
      z-index: 3;
    }
  }
  .dots-hero {
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    top: 50%;
    right: 2%;
    transform: translate(0, -50%);
    bottom: 5%;
    width: 0.8%;
    height: 16%;
    z-index: 4;
    .dot-hero {
      display: block;
      background-color: white;
      border-radius: 50%;
      width: 100%;
      margin-bottom: 0.5em;
      z-index: 3;
      aspect-ratio: 1/1;
      opacity: 30%;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;
