import styled from 'styled-components';

export const ChocoPage = styled.section`
  width: 100%;
  margin-top: 12vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.5em;
    margin-bottom: 0.5em;
    z-index: 4;
  }
  p {
    width: 50%;
    margin-bottom: 8em;
    z-index: 4;
  }
`;

export const FlavorsGrid = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 2vw;
  grid-row-gap: 2vw;
  margin: 0 auto;
  position: relative;
  padding: 4rem;
  z-index: 2;

  &:after {
    content: '';
    position: absolute;
    left: 0rem;
    right: 0rem;
    top: 0rem;
    bottom: 0rem;
    border: ${(props) => `1rem solid ${props.theme.colors.darkBrown}`};
    background-color: transparent;
    z-index: 0;
  }
  &:before {
    content: '';
    position: absolute;
    left: -1rem;
    right: -1rem;
    top: -1rem;
    bottom: -1rem;
    border: ${(props) => `0.2rem solid ${props.theme.colors.darkBrown}`};
    background-color: transparent;
    z-index: 0;
  }
`;

export const RightCornerImage = styled.img`
  position: absolute;
  width: 40%;
  right: 2%;
  top: -24%;
  right: -8%;
  z-index: 3;
`;

export const Card = styled.div`
  position: relative;
  width: 100%;
  height: 20vw;
  display: flex;
  justify-content: center;
  z-index: 3;

  .flavor-card-front {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    position: absolute;
    backface-visibility: hidden;
    h4 {
      margin: 0 0 1rem 0;
      text-transform: uppercase;
      font-weight: 500;
    }
    img {
      width: 90%;
    }
  }
  .flavor-card-back {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    backface-visibility: hidden;
    visibility: hidden;

    img {
      margin: 2rem;
      width: 7vw;
      /* max-height: 25%; */
    }
    p {
      font-size: 0.8rem;
      margin: 0;
    }
  }
`;

// export const FlavorCardBack = styled.div``;
// export const FlavorCardFront = styled(FlavorCardBack)`
//   justify-content: center;
// `;
