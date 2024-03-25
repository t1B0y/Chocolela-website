import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Gallery = styled.div`
  display: grid;
  box-sizing: border-box;
  width: 80vw;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 2rem;
  padding-right: 3rem;
`;

export const Thumbnail = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  color: ${(props) => props.theme.colors.darkBrown};
  .thumbnail_image {
    width: 100%;
    height: 75%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .thumbnail_text {
    width: 100%;
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    padding-top: 1em;
    box-sizing: border-box;
    div {
      height: 60%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      .thumbnail_name {
        margin: 0 0;
        font-weight: 500;
        font-size: 1em;
        margin-bottom: 0.3em;
      }
      .thumbnail_description {
        p {
          margin: 0;
          font-weight: 300;
          font-size: 1em;
        }
      }
    }

    .add-to-cart-btn-thumbnail {
      box-sizing: border-box;
      padding: 0 1em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 40%;
      border: ${(props) => `1px solid ${props.theme.colors.darkBrown}`};
      transition: 0.25s;
      &:hover,
      :focus {
        box-shadow: ${(props) =>
          `inset 0 -3.25em 0 0 ${props.theme.colors.darkBrown}`};
        color: white;
        cursor: pointer;
      }
      span {
        font-weight: 200;
        font-size: 0.9vw;
      }
    }
  }
`;
