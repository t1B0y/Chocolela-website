import React, { useEffect, useState } from 'react';
import { ProductPage as Page } from '../styledComponents/ProductPage';
import ProductImages from '../components/ProductImages';
import { ProductInfos } from '../styledComponents/ProductPage';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, fetchVariations } from '../redux/products';
import Parser from 'html-react-parser';
import { addProduct } from '../redux/cart';
import { QuantityButton } from '../styledComponents/QuantityProductButton';

function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const loading = useSelector((state) => state.products.isLoading);
  const variations = useSelector((state) => state.products.variations);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId]);

  useEffect(() => {
    if (product.parent_id) {
      dispatch(fetchVariations(product.parent_id));
    } else if (product.variations.length > 0) {
      dispatch(fetchProduct(product.variations[0]));
    }
  }, [product]);

  return (
    <Page>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <ProductImages
            imgs={product && product.images.map((obj) => obj.src)}
          />
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
            {variations.length > 0 && (
              <select
                name="variations"
                onChange={(e) => navigate(`/product/${e.target.value}`)}
                defaultValue={product.parent_id ? productId : variations[0].id}
              >
                {variations.map((variation, idx) => (
                  <option key={variation + idx} value={variation.id}>
                    {variation.name.toUpperCase().replace(',', ' -')}
                  </option>
                ))}
              </select>
            )}
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
            <button onClick={() => dispatch(addProduct(productId, quantity))}>
              Ajouter au panier
            </button>
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
