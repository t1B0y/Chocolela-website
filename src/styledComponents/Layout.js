import styled from 'styled-components';

export const Page = styled.section`
  margin: 10vh 0vw 0 0vw;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
`;

export const Pagination = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  .pagination-dots {
    opacity: 0;
    width: 6%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    .pagination-dot {
      width: 1em;
      height: 1em;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.darkBrown};
      opacity: 0;
    }
    .pagination-dot2 {
      background-color: ${(props) => props.theme.colors.lightBrown};
    }
  }
`;
