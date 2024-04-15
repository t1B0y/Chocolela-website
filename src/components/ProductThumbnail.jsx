import React from 'react';
import { Thumbnail } from '../styledComponents/ProductsGallery';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../redux/products';

function ProductThumbnail({ img, name, price, description, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Thumbnail>
      <a
        onClick={() => {
          dispatch(fetchProduct(id));
          navigate(`/product/${id}`);
        }}
        className="thumbnail_image"
      >
        <img src={img} />
      </a>
      <div className="thumbnail_text">
        <div>
          <h4 className="thumbnail_name">{name}</h4>
          <div
            className="thumbnail_description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <a
          className="add-to-cart-btn-thumbnail"
          // onMouseEnter={(e) => handleButtonHover(true, e.target)}
          // onMouseLeave={(e) => handleButtonHover(false, e.target)}
        >
          <span className="view-product">Voir le produit</span>
          <span className="thumbnail_price">{price} €</span>
        </a>
      </div>
    </Thumbnail>
  );
}

export default ProductThumbnail;
