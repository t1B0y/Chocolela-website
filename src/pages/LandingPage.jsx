import React from 'react';
import LandingContent from '../components/LandingContent';
import Hero from '../components/Hero';
import { LandingPageContainer } from '../styledComponents/LandingPage';

function LandingPage() {
  return (
    <LandingPageContainer>
      <Hero />
      <LandingContent />
    </LandingPageContainer>
  );
}

export default LandingPage;
