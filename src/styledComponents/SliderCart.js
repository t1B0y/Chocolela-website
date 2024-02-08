import styled from 'styled-components';

export const SliderCart = styled.section`
  position: absolute;
  background-color: white;
  right: 0;
  top: 7vh;
  width: 35%;
  min-width: 600px;
  height: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  .price-total {
    width: 90%;
    display: flex;
    justify-content: space-between;
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
  .cart-item-container {
    width: 100%;
    height: 130px;
    display: flex;
    .image-item {
      width: 17%;
      height: 80%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .cart-item-right {
      width: 83%;
      padding-left: 1em;
      .name-and-price {
        display: flex;
        justify-content: space-between;
        .name {
        }
        .price {
        }
      }
    }
    .remove-and-quantity {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .remove {
      }
      .quantity {
      }
    }
  }
`;
