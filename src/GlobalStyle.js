import { createGlobalStyle } from "styled-components";
import styled from "styled-components/macro";

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

export const HeaderTag = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.zFixed};
  background-color: ${({ theme }) => theme.colors.bodyColor};
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
    color: var(--title-color);
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