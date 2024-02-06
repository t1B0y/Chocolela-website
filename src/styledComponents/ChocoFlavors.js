import styled from 'styled-components';

export const Flavors = styled.section`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  grid-column-gap: 1vw;
  grid-row-gap: 2vw;
  margin: 0 5vw;
`;

export const Card = styled.div`
  position: relative;
  width: 15vw;
  height: 20vw;
  .flavor-card-front {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    position: absolute;
    backface-visibility: hidden;
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
    h4 {
      margin: 0 0 1rem 0;
    }
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
