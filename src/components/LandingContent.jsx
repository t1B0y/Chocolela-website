import React from 'react';
import { LandingPageBlock } from '../styledComponents/LandingPage';
import DiscoverProductLanding from './DiscoverProductLanding';

function LandingContent() {
  return (
    <LandingPageBlock>
      <h1 className="home-title">Bienvenue chez Chocolela</h1>
      <p className="title-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices
        at libero ut tempus. Maecenas dignissim porta turpis. Maecenas dignissim
        porta turpis. Nam aliquet ullamcorper diam consequat congue.
      </p>
      <DiscoverProductLanding />
      <div className="home-second-block">
        <div className="image-block">
          <img src="http://chocolela.s3.amazonaws.com/wp-content/uploads/2024/01/24231933/chocolat_landpage.webp" />
        </div>
        <div className="text-block">
          <h3 className="text-block-title">here an exemple of subtitle</h3>
          <p className="text-block-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            ultrices at libero ut tempus. Maecenas dignissim porta turpis. Nam
            aliquet ullamcorper diam consequat congue. Pellentesque id tempus
            massa. In aliquam at sem at lobortis. Praesent finibus euismod
            semper. Curabitur feugiat fringilla rutrum. Aliquam ac laoreet ante,
            a dictum urna. Morbi tempor, urna at sagittis mattis, mi nunc
            condimentum elit, id vulputate mauris lacus at turpis.
          </p>
        </div>
      </div>
    </LandingPageBlock>
  );
}

export default LandingContent;
