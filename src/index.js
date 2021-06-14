import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

// Favorite Color
const hueColor = '230';


const theme = {
  // Header Height
  HeaderHeight: '3rem',
  // Colors
  colors: {
    firstColor: `hsl(${hueColor}, 69%, 61%)`,
    firstColorSecond: `hsl(${hueColor}, 69%, 61%)`,
    firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
    firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
    titleColor: `hsl(${hueColor}, 8%, 15%)`,
    textColor: `hsl(${hueColor}, 8%, 45%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    inputColor: `hsl(${hueColor}, 70%, 96%)`,
    bodyColor: `hsl(${hueColor}, 60%, 99%)`,
    containerColor: '#eee',
    scrollBarColor: `hsl(${hueColor}, 12%, 90%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 80%)`,
  },
  // Font and typography
  typography: {
    /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px ... */
    bodyFont: `'Poppins', sans-serif`,
    bigFontSize: '2rem',
    h1FontSize: '1.5rem',
    h2FontSize: '1.25rem',
    h3FontSize: '1.12rem',
    normalFontSize: '0.938rem',
    smallFontSize: '0.813rem',
    smallerFontSize: '0.75rem',
    fontWeight: {
      fontMedium: '500',
      fontSemiBold: '600'
    }
  },
  // Margin Bottoms
  marginBottom: {
    /* .25rem = 4px, .5rem = 8px, .75rem = 12px ... */
    mb_0_25: '0.25rem',
    mb_0_5: '0.5rem',
    mb_0_75: '0.75rem',
    mb_1: '1rem',
    mb_1_5: '1.5rem',
    mb_2: '2rem',
    mb_2_5: '2.5rem',
    mb_3: '3rem',
  },
  // Z-index
  zIndex: {
    zToolTip: '10',
    zFixed: '100',
    zModel: '1000'
  }
}

render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('Life')
);
