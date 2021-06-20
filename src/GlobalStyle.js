import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";

// Favorite Color
const hueColor = '230';

export const theme = {
  // Header Height
  HeaderHeight: '3rem',
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
  },
}

export const lightTheme = {
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
}

export const darkTheme = {
  colors: {
    firstColor: `hsl(${hueColor}, 69%, 61%)`,
    firstColorSecond: `hsl(${hueColor}, 30%, 8%)`,
    firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
    firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
    titleColor: `hsl(${hueColor}, 8%, 95%)`,
    textColor: `hsl(${hueColor}, 8%, 75%)`,
    textColorLight: `hsl(${hueColor}, 8%, 65%)`,
    inputColor: `hsl(${hueColor}, 29%, 16%)`,
    bodyColor: `hsl(${hueColor}, 28%, 13%)`,
    containerColor: `hsl(${hueColor}, 29%, 16%)`,
    scrollBarColor: `hsl(${hueColor}, 12%, 48%)`,
    scrollThumbColor: `hsl(${hueColor}, 12%, 36%)`,
  },
}

/*==================== BUTTONS ====================*/
export const Button = styled.a`
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.firstColor};
    color: #eee;
    padding: 1rem;
    border-radius: 0.5rem;
    font-weight: ${({ theme }) => theme.typography.fontWeight.fontMedium};
    cursor: pointer;

    :hover {
       background-color: ${({ theme }) => theme.colors.firstColorAlt};
    }
`;

// Reusbale classes
export const Section = styled.section`
  padding: 2rem 0 4rem;
`;

export const SectionTitle = styled.h1`
  font-size: ${({ theme }) => theme.h1FontSize};
  text-align: center;
`;

export const SectionSubtitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.typography.smallFontSize};
  margin-bottom: ${({ theme }) => theme.marginBottom.mb_3};
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`  
  *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  html {
      scroll-behavior: smooth;
  }

  body {
    margin: 0 0 ${({ theme }) => theme.HeaderHeight} 0;
    font-family: ${({ theme }) => theme.typography.bodyFont};
    background-color: ${({ theme }) => theme.colors.bodyColor};
    color: ${({ theme }) => theme.colors.textColor};
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${({ theme }) => theme.colors.titleColor};
    font-weight: ${({ theme }) => theme.typography.fontWeight.fontSemiBold};
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
  }
  
  img {
    max-width: 100%;
  }

// Layout
  .container {
    max-width: 768px;
    margin: 0 ${({ theme }) => theme.marginBottom.mb_1_5} 0 ${({ theme }) => theme.marginBottom.mb_1_5};
  }

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  /* Buttons */
  .button__icon {
    font-size: 1.25rem;
    margin-left: ${({ theme }) => theme.marginBottom.mb_1_5};
    transition: 0.3s;
  }
  
  .button--white {
    background-color: #fff;
    color: ${({ theme }) => theme.colors.firstColor};

    :hover {
      background-color: #fff;
    }
  }
  
  .button--flex {
    display: inline-flex;
    align-items: center;
  }
  
  .button--small {
    padding: 0.75rem 1rem;
  }
  
  .button--link {
    padding: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.firstColor};
  }
  
  .button--link:hover {
    background-color: transparent;
  }

  /* Scroll-Bar */
  ::-webkit-scrollbar {
    width: 0.6rem;
    background-color: ${({ theme }) => theme.colors.scrollBarColor};
    border-radius: 0.5rem;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollThumbColor};
    border-radius: 0.5rem;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.textColorLight};
  }
`;