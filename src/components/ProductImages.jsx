import React, { useEffect, useState } from 'react';
import { ProductImages as Images } from '../styledComponents/ProductPage';
function ProductImages({ imgs }) {
  const [current, setCurrent] = useState('');

  useEffect(() => {
    setCurrent(imgs[0].src);
  }, []);

  return (
    <Images>
      <div className="images-column">
        {imgs &&
          imgs.map((img, idx) => (
            <div key={idx + img.src}>
              <img src={img.src} onClick={() => setCurrent(img.src)} />
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
