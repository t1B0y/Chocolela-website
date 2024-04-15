import styled from 'styled-components';

export const LandingPageContainer = styled.section`
  position: absolute;
  top: 7vh;
  left: 0;
`;

export const LandingPageBlock = styled.section`
  width: 100%;
  position: relative;
  .home-title {
    text-transform: uppercase;
    font-size: 3.5vw;
    margin-bottom: 0.5em;
    color: #5b3023;
  }
  .title-text {
    width: 50%;
    margin: 1em auto;
  }
`;

export const DiscoverBlock = styled.div`
  width: 100%;
  height: 800px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .discover-central-block {
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24vw;
    z-index: 1;
    img {
      width: 15vw;
    }
  }
  .animation {
    position: absolute;
    top: 20%;
    left: 34%;
    z-index: 0;
  }
  .discover-circle {
    position: absolute;
    border: 1px solid #c49d9a;
    width: 45%;
    aspect-ratio: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`;

export const DiscoverTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 13vw;
  position: absolute;
  background-color: transparent;
  z-index: 1;
  top: ${({ name }) => (name === 'chocolate' ? '1%' : '60%')};
  left: ${({ name }) =>
    name === 'chocolate' ? '50%' : name === 'cake' ? '30%' : '70%'};
  transform: translate(-50%, 0);
  .discover-text-img {
    width: 10vw;
    &:first-of-type {
      width: 10vw;
    }
  }
  .discover-text-title {
  }
  .discover-text-paragraph {
  }
`;
