import styled from 'styled-components';

export const Nav = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  top: 0;
  left: 0;
  height: 7vh;
  z-index: 200;
  border-bottom: ${(props) => `0.1px solid ${props.theme.colors.darkBrown}`};
  #nav-top-bar {
    color: ${(props) => props.theme.colors.darkBrown};
    width: 100vw;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    #logo-nav {
      height: 80%;
      margin-left: 3vw;
    }
    #nav-menu {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 0.9em;
      a {
        text-decoration: none;
        text-transform: uppercase;
        margin-right: 1.5vw;
        &:last-of-type {
          margin-right: 0px;
        }
      }
      btn {
        margin: 0px 10px;
      }
    }
    #nav-btn-box {
      display: flex;
      align-items: center;
      height: 40%;
      margin-right: 3vw;
      img {
        height: 100%;
        &:first-of-type {
          margin-right: 20px;
        }
      }
    }
  }
`;

export const MenuNav = styled.div`
  position: absolute;
  height: 93vh;
  top: 7vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 2;
  #container-subMenu {
    display: flex;
    box-sizing: border-box;
    z-index: 1;
    background-color: white;
    top: 7vh;
    width: 100vw;
    &:after {
      display: block;
      background-color: red;
      height: 20vh;
      content: '';
    }
  }
  #side-menu-nav {
    margin: 2rem 0;
    margin-left: 6rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    white-space: nowrap;
    height: 100%;
    a {
      margin: 0.3rem;
      font-weight: 200;
      &:first-of-type {
        margin-top: 0;
        margin-bottom: 1rem;
        font-weight: 400;
      }
    }
  }
  #menu-nav-pictures-box {
    width: -webkit-fill-available;
    margin-left: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 100%;
  }
`;

export const ThumbnailNav = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  .img-thumbnail-nav {
    width: 100%;
    height: 100%;
    background-color: black;
    margin-bottom: 1rem;
    img {
      min-height: 350px;
      width: 100%;
      height: 100%;
      /* object-fit: cover; */
    }
  }
  .text-thumbnail-nav {
    display: inline-block;
  }
`;
