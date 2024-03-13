import React from 'react';
import { Thumbnail } from '../styledComponents/ProductsGallery';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

function ProductThumbnail({ img, name, price, category, id }) {
  const navigate = useNavigate();
  const handleButtonHover = (enter, btn) => {
    if (enter) {
    }
  };
  return (
    <Thumbnail>
      <Link to={`/product/${id}`} className="thumbnail_image">
        <img src={img[0]} />
      </Link>
      <h4 className="thumbnail_name">{name}</h4>
      <a
        className="add-to-cart-btn-thumbnail"
        onMouseEnter={(e) => handleButtonHover(true, e.target)}
        onMouseLeave={(e) => handleButtonHover(false, e.target)}
      >
        <span className="view-product">Ajouter a mon panier</span>
        <span className="thumbnail_price">{price} €</span>
      </a>
    </Thumbnail>
  );
}

export default ProductThumbnail;
