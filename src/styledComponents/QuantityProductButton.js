import styled from 'styled-components';

export const QuantityButton = styled.div`
  display: flex;
  .quantity-side-button {
    width: 25px;
    height: 25px;
    padding: 2px;
    border: ${(props) => `1px solid ${props.theme.colors.darkBrown}`};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 1.5em;
    &:hover {
      background-color: ${(props) => props.theme.colors.darkBrown};
      color: white;
    }
    &:focus-within {
      background-color: ${(props) => props.theme.colors.lightBrown};
      color: white;
    }
  }
  .quantity-plus {
  }
  .quantity-minus {
  }
  .quantity-button-center {
    width: 35px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: ${(props) => `1px solid ${props.theme.colors.darkBrown}`};
    border-bottom: ${(props) => `1px solid ${props.theme.colors.darkBrown}`};
    padding: 2px;
  }
`;
