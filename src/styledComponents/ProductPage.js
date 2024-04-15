import styled from 'styled-components';

export const ProductPage = styled.div`
  position: absolute;
  left: 0;
  top: 9vh;
  width: 100%;
  display: flex;
`;

export const ProductImages = styled.div`
  width: 55%;
  height: 90vh;
  margin: 0 3vw 0 3vw;
  display: flex;
  .images-column {
    width: 12%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 1em;
    div {
      width: 100%;
      height: 13%;
      margin-bottom: 1em;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .current-image {
    width: 88%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const ProductInfos = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-right: 2em;
  width: 45%;
  color: ${(props) => props.theme.colors.darkBrown};
  .product-categories {
    .product-category {
      font-weight: 200;
      font-size: 0.65em;
    }
    margin-bottom: 1em;
  }
  .product-title {
    font-weight: 500;
  }
  .product-quantity-text {
    font-weight: 300;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
  .product-price {
    font-weight: 400;
    font-size: 1.2rem;
    margin: 0 0 1.2rem 0;
  }
  .description-block {
    box-sizing: border-box;
    background-color: rgba(196, 157, 154, 0.3);
    padding: 1em;
    margin: 1em 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    h5 {
      font-size: 0.9em;
      font-weight: 200;
      margin: 0;
      text-align: left;
      float: left;
      display: block;
    }
    .header {
      width: 100%;
      border-bottom: 10;
      padding-bottom: 0.5em;
      margin-bottom: 1em;
      border-bottom: ${(props) => `1px solid ${props.theme.colors.darkBrown}`};
    }
    p {
      text-align: left;
      font-weight: 200;
      text-transform: none;
      margin: 0;
    }
  }
  button {
    background-color: ${(props) => props.theme.colors.darkBrown};
    border: ${(props) => `1px solid ${props.theme.colors.darkBrown}`};
    padding: 1em 1em;
    font-size: 1vw;
    width: 100%;
    margin: 1em 0;
    color: white;
    text-align: left;
  }

  select {
    width: 100%;
    background-color: white;
    border: ${(props) => `1px solid ${props.theme.colors.darkBrown}`};
    color: #5b3023;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    margin: 0;
    margin-bottom: 1em;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;
    &:focus {
      background-image: linear-gradient(45deg, gray 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, gray 50%),
        linear-gradient(to right, #ccc, #ccc);
      background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em,
        calc(100% - 2.5em) 0.5em;
      background-size: 5px 5px, 5px 5px, 1px 1.5em;
      background-repeat: no-repeat;
      outline: 0;
    }
  }
`;
