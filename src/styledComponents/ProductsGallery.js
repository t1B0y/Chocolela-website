import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Gallery = styled.div`
  display: grid;
  width: 85vw;
  height: 100vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;
  padding-right: 3rem;
`;

export const Thumbnail = styled.div`
  position: relative;
  height: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  color: ${(props) => props.theme.colors.darkBrown};
  .thumbnail_name {
    margin: 0.5em 0;
    font-weight: 500;
    font-size: 1em;
  }
  .thumbnail_image {
    width: 100%;
    height: 80%;
    margin-bottom: 0.5em;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .add-to-cart-btn-thumbnail {
    box-sizing: border-box;
    padding: 0 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 8%;
    border: ${(props) => `1px solid ${props.theme.colors.darkBrown}`};
    transition: 0.25s;
    &:hover,
    :focus {
      box-shadow: ${(props) =>
        `inset 0 -3.25em 0 0 ${props.theme.colors.darkBrown}`};
      color: white;
    }
    span {
      font-weight: 200;
      font-size: 0.9vw;
    }
  }
`;
