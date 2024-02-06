import React, { useEffect, useState } from 'react';
import { ProductPage as Page } from '../styledComponents/ProductPage';
import ProductImages from '../components/ProductImages';
import { ProductInfos } from '../styledComponents/ProductPage';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, fetchVariations } from '../redux/products';
import Parser from 'html-react-parser';

function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  const loading = useSelector((state) => state.products.isLoading);
  const variations = useSelector((state) => state.products.variations);
  console.log(product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);

  useEffect(() => {
    if (product.variations.length > 0) {
      dispatch(fetchVariations(productId));
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
            {product.variations.length > 0 && (
              <select name="variations">
                {variations.map((variation) => (
                  <option key={variation} value={variation}>
                    {variation.name.toUpperCase().replace(',', ' -')}
                  </option>
                ))}
              </select>
            )}
            <button>Ajouter au panier</button>
            <div className="description-block" content={product.description}>
              <div className="header">
                <h5 className="description-title">description</h5>
                <span className="description-line"></span>
              </div>
              <p className="product-description">
                {Parser(product.description)}
              </p>
            </div>
          </ProductInfos>
        </>
      )}
    </Page>
  );
}

export default ProductPage;
