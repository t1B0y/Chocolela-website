import React from 'react';
import { FooterContainer } from '../styledComponents/Footer.js';

function Footer() {
  return (
    <FooterContainer>
      <div className="image-block">
        <img src="" />
      </div>
      <div className="text-block">
        <h3 className="text-block-title">here an exemple of subtitle</h3>
        <p className="text-block-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          ultrices at libero ut tempus. Maecenas dignissim porta turpis. Nam
          aliquet ullamcorper diam consequat congue. Pellentesque id tempus
          massa. In aliquam at sem at lobortis. Praesent finibus euismod semper.
          Curabitur feugiat fringilla rutrum. Aliquam ac laoreet ante, a dictum
          urna. Morbi tempor, urna at sagittis mattis, mi nunc condimentum elit,
          id vulputate mauris lacus at turpis.
        </p>
      </div>
    </FooterContainer>
  );
}

export default Footer;
