import React from 'react';
import { Thumbnail } from '../styledComponents/ProductsGallery';
import gsap from 'gsap';

function ProductThumbnail({ img, name, price, category, id }) {
  const handleButtonHover = (enter, btn) => {
    if (enter) {
    }
  };
  return (
    <Thumbnail to={`/product/${id}`}>
      <div className="thumbnail_image">
        <img src={img[0]} />
      </div>
      <h4 className="thumbnail_name">{name}</h4>
      <a
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
