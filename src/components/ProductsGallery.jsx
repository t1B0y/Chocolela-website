import React, { useEffect, useState } from 'react';
import { Page } from '../styledComponents/Layout';
import FilterBar from './filterBar';
import { Gallery } from '../styledComponents/ProductsGallery';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/products';
import ProductThumbnail from './ProductThumbnail';
import { useLocation, useSearchParams } from 'react-router-dom';
import { resetSelected, selectCategories } from '../redux/filter';

function ProductsGallery() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.isLoading);
  const products = useSelector((state) => state.products.products);
  console.log(products);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts(searchParams.get('categories')));
  }, [searchParams]);

  const thumbnails = products.map((p, idx) => (
    <ProductThumbnail
      name={p.name}
      price={p.price}
      img={p.images}
      id={p.id}
      key={p.name + idx}
    ></ProductThumbnail>
  ));

  return (
    <Page>
      <FilterBar />
      {loading ? <div>loading...</div> : <Gallery>{thumbnails}</Gallery>}
    </Page>
  );
}

export default ProductsGallery;
