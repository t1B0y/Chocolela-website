import styled from 'styled-components';

export const FilterBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 200px;
  width: 12vw;
  margin-right: 3vw;
  margin-left: 3vw;
  .accordion-group {
    width: 100%;
  }
  .accordion-category {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  }
`;

export const FilterBtnContainer = styled.div`
  display: flex;
`;
