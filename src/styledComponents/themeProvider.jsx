import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    darkBrown: '#5b3023',
    lightBrown: '#c49d9a',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
