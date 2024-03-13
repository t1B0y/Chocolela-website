import styled from 'styled-components';

export const SliderCart = styled.section`
z-index: 1000;
  position: absolute;
  background-color: white;
  top: 0;
  left: 100vw;
  width: 35%;
  min-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header-slider-cart{
    width: 90%;
    height: 7vh;
    border-bottom: ${(props) => `1px solid ${props.theme.colors.darkBrown}`};
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .products-number{
      position: absolute;
      left: 0em;
      font-size: 0.9em;
      font-weight: 400;
      text-transform: uppercase;
      height: 5vh;
      display: flex;
      align-items: center;
      img{
        height: 60%;
        margin-right: 0.5em;
      }
    }
    .close-slider-btn{
      position: absolute;
      right: 0em;
      width: 30px;
      height: 30px;
      opacity: 0.3;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5em;
      font-weight: 200;

      &:hover{
        opacity: 1;
      }
    }
    h3{
      margin-right: 0.5em;
      font-size: 1em;
      font-weight: 500;
      text-transform: uppercase;
    }
  }

  .price-total {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
    .price {
    }
    .total {
    }
  }
  .line-cart {
    width: 90%;
    height: 1px;
    background-color: black;
    margin: 1em 0;
  }
  .cart-btn {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.25s;
  }
  .checkout-btn {
    background-color: ${(props) => props.theme.colors.darkBrown};
    box-sizing: border-box;
    padding: 1em 1em;
    color: white;
    border: ${(props) => `1px solid ${props.theme.colors.darkBrown}`};
    &:hover,
    :focus {
      background-color: ${(props) => props.theme.colors.lightBrown};
      border: ${(props) => `1px solid ${props.theme.colors.lightBrown}`};
      color: white;
    }
    margin-bottom: 1em;
  }
  .shopping-btn{
    background-color: white;
    box-sizing: border-box;
    padding: 1em 1em;
    border: ${(props) => `1px solid ${props.theme.colors.darkBrown}`};
    margin-bottom: 2em;
    &:hover,
    :focus {
      background-color: ${(props) => props.theme.colors.darkBrown};
      color: white;
    }
  }
  .
`;

export const ListSliderCart = styled.div`
  width: 90%;
  box-sizing: border-box;
  height: 70%;
  overflow-y: scroll;
  .cart-item-container {
    position: relative;
    width: 100%;
    height: 130px;
    display: flex;
    margin-bottom: 1em;
    .image-item {
      width: 18%;
      height: 100%;
      margin-right: 1em;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .cart-item-right {
      display: flex;
      flex-direction: column;
      justify-content: start;
      width: 83%;
      padding-left: 1em;
      align-items: start;
      .text-item-cart {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-bottom: 1em;
        .name {
          text-transform: uppercase;
          font-weight: 500;
          font-size: 0.8em;
          margin-bottom: 0.3em;
        }
        .variation {
          font-weight: 300;
          font-size: 0.9em;
        }
      }
    }
    .remove {
      color: red;
      position: absolute;
      right: 0;
      bottom: 0em;
    }
    .price {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;
