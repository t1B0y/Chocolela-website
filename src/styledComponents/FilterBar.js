import styled from 'styled-components';

export const FilterBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 200px;
  width: 16vw;
  margin: 0 2vw;
  .title {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.9em;
    margin-bottom: 0.8em;
  }
  .accordion-group {
    width: 100%;
  }
  .accordion-category {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 0.5px solid black;
    padding-bottom: 0.25em;
    padding-top: 0.25em;
    font-weight: 500;
    .arrow-down {
      width: 0.8rem;
    }
  }
  .accordion-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: hidden;
    height: 0;
    /* div {
      display: flex;
      font-weight: 300;

      &:last-of-type {
        margin-bottom: 1em;
      }
      &:first-of-type {
        margin-top: 0.5em;
      }
      input {
        -webkit-appearance: none;
        margin-right: 1em;
        border-radius: 0;
        border: ${(props) => ` 1px solid ${props.theme.colors.darkBrown}`};
        display: inline-block;
        padding: 6px;
        position: relative;
        &:after{
          content: '\2714';
          font-size: 14px;
          position: absolute;
          top: 0px;
          left: 3px;
          color: #99a1a7;
         }
      } */

      label {
      }
    }
  }
`;

export const FilterBtnContainer = styled.div``;
