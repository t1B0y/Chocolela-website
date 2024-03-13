import styled from 'styled-components';

export const ParticlesAnim = styled.div`
  width: 40vw;
  height: 40vw;
  position: relative;
  .particles {
    display: block;
    /* opacity: 0; */
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
