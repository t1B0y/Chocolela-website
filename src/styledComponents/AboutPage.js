import styled from 'styled-components';
import backgroundImg from '../assets/about/background.svg';

export const AboutBlock1 = styled.section`
  width: 100%;
  padding-top: 10vh;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  .block-1-img1 {
    margin-top: 14vw;
    grid-column: 3/9;
    grid-row: 1;
    height: 25vw;
    width: 20vw;
    position: relative;
    z-index: 3;
    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }
  .block-1-img2 {
    margin-top: 6vw;
    grid-column: 5/15;
    grid-row: 1;
    height: 42vw;
    width: 33vw;
    overflow: hidden;
    position: relative;
    z-index: 2;
    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }
  .block-1-img3 {
    margin-top: 42vw;
    grid-column: 14/18;
    grid-row: 1;
    height: 25vw;
    overflow: hidden;
    z-index: 3;
    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
    }
  }
  .paddle1 {
    margin-top: 25vw;
    grid-column: 7/16;
    grid-row: 1;
    width: 32vw;
    z-index: 1;
  }
  .paddle2 {
    margin-top: 10vw;
    grid-column: 1/6;
    grid-row: 1;
    width: 32vw;
    z-index: 1;
  }
  .paddle3 {
    margin-top: 15vw;
    grid-column: 7/17;
    grid-row: 1;
    width: 32vw;
    z-index: 1;
  }
  .block-1-title {
    margin-top: 12vw;
    grid-row: 1;
    grid-column: 12/17;
    width: 100%;
    overflow: hidden;
    height: 3.6vw;
    span {
      display: block;
      font-weight: 700;
      font-size: 3.6vw;
      text-align: left;
    }
  }
  .block-1-baseline {
    margin-top: 16vw;
    grid-row: 1;
    grid-column: 13/19;
    overflow: hidden;
    height: 2vw;

    span {
      display: block;
      font-weight: 400;
      font-size: 2vw;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.lightBrown};
      white-space: nowrap;
      text-align: left;
    }
  }
  .block-1-paragraph {
    margin-top: 21vw;
    grid-row: 1;
    grid-column: 13/17;
    font-weight: 300;
    text-align: left;
    font-size: 1vw;
    .block-1-paragraph-line {
      height: 1.3vw;
      overflow: hidden;
      span {
        display: block;
      }
    }
  }
`;

export const AboutBlock2 = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  position: relative;
  .block-2-background {
    width: 100%;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    grid-row: 1;
    grid-column: 1/19;
    height: 93vh;
    z-index: 1;
  }
  .block-2-title {
    margin-top: 16vw;
    text-align: left;
    grid-row: 1;
    grid-column: 2/13;
    font-weight: 600;
    font-size: 3.8vw;
    color: white;
    z-index: 3;
    text-transform: uppercase;
    line-height: 5vw;
    width: 100%;
    z-index: 3;
    .block-2-title-line {
      overflow: hidden;
      .block-2-title-text {
        display: block;
      }
    }
  }
  .block-2-paragraph {
    margin-top: 40vw;
    grid-row: 1;
    grid-column: 2/7;
    font-weight: 300;
    text-align: left;
    font-size: 1vw;
    color: white;
    z-index: 3;
    .block-2-paragraph-line {
      height: 1.3vw;
      overflow: hidden;
      span {
        display: block;
      }
    }
  }
  .block-2-image {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }
`;

export const AboutBlock3 = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(18, 1fr);
  position: relative;
  .about-img5 {
    margin-top: 14vw;
    grid-column: 5/13;
    grid-row: 3;
    height: 42vw;
    overflow: hidden;
    z-index: 3;
    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }
  .about-img6 {
    margin-top: 35vw;
    grid-column: 2/6;
    grid-row: 3;
    height: 25vw;
    overflow: hidden;
    margin-bottom: 5vw;
    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }
  .about-img7 {
    margin-top: 5vw;
    grid-column: 12/17;
    grid-row: 3;
    height: 25vw;
    overflow: hidden;
    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }
  .paddle-4 {
    margin-top: 0vw;
    grid-column: 1/9;
    grid-row: 3;
    width: 32vw;
    transform: translateX(-8vw);
  }
  .paddle-5 {
    margin-top: 0vw;
    grid-column: 1/8;
    grid-row: 3;
    width: 32vw;
    z-index: 2;
  }
  .block3-paragraph {
    margin-top: 41vw;
    text-align: left;
    grid-row: 3;
    grid-column: 14/18;
    font-weight: 300;
    font-size: 1vw;
    z-index: 3;
    color: ${(props) => props.theme.colors.lightBrown};
  }
  .block3-title {
    margin-top: 34vw;
    text-align: left;
    grid-row: 3;
    grid-column: 14/18;
    font-weight: 600;
    font-size: 2.3vw;
    z-index: 3;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.darkBrown};
  }
`;
export const AboutPage = styled.section`
  display: flex;
  flex-direction: column;

  /* .about-img4 {
    margin-top: 2vw;
    grid-column: 1/7;
    grid-row: 2;
    height: 43vw;
    overflow: hidden;
    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      width: 100%;
    }
  }
 */

  /*  */

  /*  */
`;
