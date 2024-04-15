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
    </LandingPageBlock>
  );
}

export default LandingContent;
