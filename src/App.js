import { useEffect, useState } from "react";
import { ThemeProvider } from 'styled-components';
import styled from "styled-components/macro";
import UilArrowUp from "@iconscout/react-unicons/icons/uil-arrow-up";
import { GlobalStyle, darkTheme, lightTheme, theme } from "./GlobalStyle";
import resumeData from "./data/resumeData.json";
import {
  About,
  Background,
  Contact,
  Footer,
  Header,
  Home,
  Portfolio,
  Project,
  Qualification,
  ScrollUp,
  Services,
  Skill,
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
          <Header
            data={resumeData.header}
            mainData={resumeData.main}
            toggleTheme={toggleTheme}
            setToggleTheme={setToggleTheme}
          />
          {toggleTheme === 'dark' && (
            <Background />
          )}
          <Home data={resumeData.main} />
          <About data={resumeData.about} />
          <Skill data={resumeData.skill} />
          <Qualification data={resumeData.qualification} />
          <Services data={resumeData.services} />
          <Portfolio data={resumeData.portfolio} />
          <Project />
          <Testimonial data={resumeData.testimonial} />
          <Contact />
          <ScrollUpLink href="#" show={show}>
            <ScrollupIcon>
              <UilArrowUp />
            </ScrollupIcon>
          </ScrollUpLink>
          <ScrollUp />
        </Application>
        <Footer mainData={resumeData.main} data={resumeData.main} />
      </ThemeProvider>
    </ThemeProvider>
  );
};

export default App;

const Application = styled.main`
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 0 1rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 0;
  }
`;

const ScrollUpLink = styled.a`
  position: fixed;
  right: 1rem;
  bottom: ${({ show }) => show ? '5rem' : '-20%'};
  background-color: ${({ theme }) => theme.colors.firstColor};
  z-index: ${({ theme }) => theme.zIndex.zFixed};
  opacity: 0.8;
  padding: 0 0.3rem;
  border-radius: 0.4rem;
  transition: 0.4s;
  justify-content: center;
  padding: 0.3rem;

  :hover {
    background-color: ${({ theme }) => theme.colors.firstColorAlt};
  }

  @media screen and (min-width: 1200px) {
    right: 10rem;
  }
`;

const ScrollupIcon = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: #fff;
`;
