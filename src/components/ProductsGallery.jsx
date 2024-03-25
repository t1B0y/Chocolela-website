import React, { useEffect, useState, useRef } from 'react';
import { Page, Pagination } from '../styledComponents/Layout';
import FilterBar from './FilterBar';
import { Gallery } from '../styledComponents/ProductsGallery';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNextPage, fetchProducts } from '../redux/products';
import ProductThumbnail from './ProductThumbnail';
import { useLocation, useSearchParams } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Lottie from 'lottie-react';
import loadingBird from '../assets/loading_bird.json';

gsap.registerPlugin(ScrollTrigger);

function ProductsGallery() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = useSelector((state) => state.products.page);
  const container = useRef();
  const loading = useSelector((state) => state.products.isLoading);
  const loadingPage = useSelector((state) => state.products.isLoadingPage);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts(searchParams.get('category')));
  }, [searchParams]);

  useGSAP(
    () => {
      ScrollTrigger.refresh();
    },
    {
      scope: container.current,
      dependencies: [loading, loadingPage],
    }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          toggleActions: 'play play play play',
          start: 'center bottom',
          markers: true,
          onEnter: () => dispatch(fetchNextPage(searchParams.get('category'))),
        },
        repeat: -1,
      });

      tl.set('.pagination-dots', { opacity: 1 });
      tl.fromTo(
        '.pagination-dot1',
        { scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.7 }
      );
      tl.fromTo(
        '.pagination-dot2',
        { scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.7 },
        '>-=0.4'
      );
      tl.fromTo(
        '.pagination-dot3',
        { scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.7 },
        '>-=0.4'
      );
      tl.to(
        '.pagination-dot1',
        { scale: 0.5, opacity: 0, duration: 0.7 },
        '>-=0.5'
      );
      tl.to(
        '.pagination-dot2',
        { scale: 0.5, opacity: 0, duration: 0.7 },
        '>-=0.4'
      );
      tl.to(
        '.pagination-dot3',
        { scale: 0.5, opacity: 0, duration: 0.7 },
        '>-=0.4'
      );
    },
    { scope: container.current }
  );

  const thumbnails = products.map((p, idx) => (
    <ProductThumbnail
      name={p.name}
      price={p.price}
      img={p.images[0].src}
      id={p.id}
      description={p.short_description ? p.short_description : null}
      key={p.name + idx}
    ></ProductThumbnail>
  ));

  return (
    <Page>
      <FilterBar />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
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
          <Gallery>{thumbnails}</Gallery>
        )}
        <Pagination ref={container} className="pagination">
          {loadingPage && (
            <div className="pagination-dots">
              <span className="pagination-dot pagination-dot1" />
              <span className="pagination-dot pagination-dot2" />
              <span className="pagination-dot pagination-dot3" />
            </div>
          )}
        </Pagination>
      </div>
    </Page>
  );
}

export default ProductsGallery;
