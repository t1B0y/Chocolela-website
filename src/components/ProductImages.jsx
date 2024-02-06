import React, { useEffect, useState } from 'react';
import { ProductImages as Images } from '../styledComponents/ProductPage';
function ProductImages({ imgs }) {
  const [current, setCurrent] = useState(['']);

  useEffect(() => {
    setCurrent(imgs[0]);
  }, []);
  return (
    <Images>
      <div className="images-column">
        {imgs.map((src, idx) => (
          <div key={src}>
            <img src={src} onClick={() => setCurrent(imgs[idx])} />
          </div>
        ))}
      </div>
      <div className="current-image">
        <img src={current} />
      </div>
    </Images>
  );
}

export default ProductImages;
