import React, { useEffect, useState } from 'react';
import { Nav, MenuNav } from '../styledComponents/NavBar';
import logo1 from '../assets/logo1.svg';
import searchLogo from '../assets/search.svg';
import cartLogo from '../assets/cart.svg';
import ThumbnailNavBar from './ThumbnailNavBar';
import { Link, useNavigate } from 'react-router-dom';
import NavBarHover from './NavBarHover';
import { useDispatch } from 'react-redux';
import { addProduct, getCart, openCart, setCartKey } from '../redux/cart';
import cookie from 'react-cookies';
import CartSlider from './CartSlider';

function NavBar() {
  const [hovered, setHover] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <>
      <Nav>
        <div id="nav-top-bar">
          <img onClick={() => navigate('/')} id="logo-nav" src={logo1} />
          <div id="nav-menu">
            <Link
              onMouseEnter={() => setHover('chocolats')}
              to={'/produits?categories=17'}
            >
              Chocolats
            </Link>
            <Link
              onMouseEnter={() => setHover('patisseries')}
              to={'/produits?categories=27'}
            >
              Patisserie
            </Link>
            <Link onMouseEnter={() => setHover(null)} to={'/contact'}>
              Contact
            </Link>
            <Link onMouseEnter={() => setHover(null)} to={'/about'}>
              Qui sommes nous ?
            </Link>
          </div>
          <div id="nav-btn-box">
            <img src={searchLogo}></img>
            <img src={cartLogo} onClick={() => dispatch(openCart())}></img>
          </div>
        </div>
        {hovered && <NavBarHover cat={hovered} close={() => setHover(null)} />}
      </Nav>
      <CartSlider />
    </>
  );
}

export default NavBar;
