import { useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components';
import styled from "styled-components/macro";
import UilArrowUp from "@iconscout/react-unicons/icons/uil-arrow-up";
import { GlobalStyle, darkTheme, lightTheme, theme } from "./GlobalStyle";
import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Portfolio,
  Project,
  Qualification,
  Services,
  Skills,
  Testimonial
} from "./Components";

const App = () => {
  const [show, setShow] = useState(false);
  const [toggleTheme, setToggleTheme] = useState("");

  const showScrollUpLink = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", showScrollUpLink);

    return () => window.removeEventListener("scroll", showScrollUpLink);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={toggleTheme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Application>
          <Header toggleTheme={toggleTheme} setToggleTheme={setToggleTheme} />
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Services />
          <Portfolio />
          <Project />
          <Testimonial />
          <Contact />
          <Footer />
          <ScrollUpLink
            href="#"
            id="scroll-up"
            className={`${show && 'show-scroll'}`}
          >
            <UilArrowUp className="scrollup__icon" />
          </ScrollUpLink>
        </Application>
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default App;

const Application = styled.main`
  .show-scroll {
    bottom: 5rem;
  }

  /* Change background header */
  /* HeaderTag box-shadow when scroll */
    .scroll-header {
      box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    }
`;

const ScrollUpLink = styled.a`
  position: fixed;
  right: 1rem;
  bottom: -20%;
  background-color: ${({ theme }) => theme.colors.firstColor};
  z-index: ${({ theme }) => theme.zIndex.tooltip};
  opacity: 0.8;
  padding: 0 0.3rem;
  border-radius: 0.4rem;
  transition: 0.4s;
  display: flex;
  justify-content: center;
  padding: 0.3rem;

  .scrollup__icon {
    font-size: 1.5rem;
    color: #fff;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.firstColorAlt};
  }
`;