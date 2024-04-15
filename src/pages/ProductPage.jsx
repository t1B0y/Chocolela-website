import React, { useEffect, useState } from 'react';
import { ProductPage as Page } from '../styledComponents/ProductPage';
import ProductImages from '../components/ProductImages';
import { ProductInfos } from '../styledComponents/ProductPage';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, selectVariation } from '../redux/products';
import Parser from 'html-react-parser';
import { addProduct } from '../redux/cart';
import { QuantityButton } from '../styledComponents/QuantityProductButton';
import Lottie from 'lottie-react';
import loadingBird from '../assets/loading_bird.json';

function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const loading = useSelector((state) => state.loading.product);
  const variations = useSelector((state) => state.products.variations);
  const isVariation = useSelector((state) => state.products.isVariation);
  const [variationSelected, setVariationSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);

  const handleClick = () => {
    if (!isVariation) {
      dispatch(addProduct(product.id, quantity));
    } else {
      dispatch(addProduct(variations[variationSelected].id, quantity));
    }
  };

  return (
    <Page>
      {loading ? (
        <div
          style={{
            width: '85vw',
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Lottie style={{ width: '150px' }} animationData={loadingBird} />
        </div>
      ) : (
        <>
          <ProductImages imgs={product.images} />
          <ProductInfos>
            <span className="product-title">{product.name}</span>
            <div className="product-categories">
              {product.categories.map((cat, idx) => (
                <span key={cat + idx} className="product-category">
                  {cat.name}
                  {idx !== product.categories.length - 1 && ', '}
                </span>
              ))}
            </div>
            <div className="product-price">
              {isVariation
                ? variations[variationSelected].price + ' €'
                : product.price + ' €'}
            </div>
            <span className="product-quantity-text">Quantité : </span>
            <QuantityButton>
              <div
                onClick={() =>
                  setQuantity((prev) => {
                    if (prev > 1) {
                      return --prev;
                    }
                    return 1;
                  })
                }
                className="quantity-side-button"
              >
                -
              </div>
              <div className="quantity-button-center">{quantity}</div>
              <div
                onClick={() => setQuantity((prev) => ++prev)}
                className="quantity-side-button"
              >
                +
              </div>
            </QuantityButton>
            {isVariation && (
              <select
                name="variations"
                defaultValue={0}
                onChange={(e) => {
                  setVariationSelected(e.target.value);
                }}
              >
                {variations.map((variation, idx) => (
                  <option key={variation + idx} value={idx}>
                    {variation.name.toUpperCase().replace(',', ' -')}
                  </option>
                ))}
              </select>
            )}

            <button onClick={handleClick}>Ajouter au panier</button>
            <div className="description-block" content={product.description}>
              <div className="header">
                <h5 className="description-title">description</h5>
                <span className="description-line"></span>
              </div>
              <div className="product-description">
                {Parser(product.description)}
              </div>
            </div>
          </ProductInfos>
        </>
      )}
    </Page>
  );
}

export default ProductPage;
