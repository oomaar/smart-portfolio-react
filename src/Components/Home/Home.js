import UilLinkedinAlt from "@iconscout/react-unicons/icons/uil-linkedin-alt";
import UilGithubAlt from "@iconscout/react-unicons/icons/uil-github-alt";
import UilFacebookF from "@iconscout/react-unicons/icons/uil-facebook-f";
import UilMessage from "@iconscout/react-unicons/icons/uil-message";
import UilMouseAlt from "@iconscout/react-unicons/icons/uil-mouse-alt";
import UilArrowDown from "@iconscout/react-unicons/icons/uil-arrow-down";

import { Button, Section } from "../../GlobalStyle";
import {
    HomeContaier,
    HomeContent,
    HomeSocial,
    SocialIcon,
    HomeImage,
    HomeData,
    HomeTitle,
    HomeSubtitle,
    HomeDescription,
    HomeScroll,
    ScrollButton,
    ScrollButtonText,
} from "./styledHome";

const Home = () => {
    return (
        <Section id="home">
            <HomeContaier className="container grid">
                <HomeContent className="grid">
                    <HomeSocial>
                        <SocialIcon href="https://www.linkedin.com" target="_blank">
                            <UilLinkedinAlt />
                        </SocialIcon>
                        <SocialIcon href="https://www.github.com" target="_blank">
                            <UilGithubAlt />
                        </SocialIcon>
                        <SocialIcon href="https://www.facebook.com" target="_blank">
                            <UilFacebookF />
                        </SocialIcon>
                    </HomeSocial>

                    <HomeImage>
                        <svg
                            className="home__blob"
                            viewBox="0 0 200 187"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <mask id="mask0" mask-type="alpha">
                                <path
                                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                />
                            </mask>
                            <g mask="url(#mask0)">
                                <path
                                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                                />
                                <image
                                    className="home__blob-img"
                                    xlinkHref="/img/perfil.png"
                                    x="12"
                                    y="18"
                                />
                            </g>
                        </svg>

                    </HomeImage>

                    <HomeData>
                        <HomeTitle>Hi, I'am Omar</HomeTitle>
                        <HomeSubtitle>Frontend developer</HomeSubtitle>
                        <HomeDescription>
                            High level experience in web design and development knowledge,
                            producing quality work.
                        </HomeDescription>
                        <Button href="#contact" className="button--flex">
                            Contact Me <UilMessage className="button__icon" />
                        </Button>
                    </HomeData>
                </HomeContent>

                <HomeScroll>
                    <ScrollButton href="#about" className="button--flex">
                        <UilMouseAlt className="scroll__mouse" />
                        <ScrollButtonText> Scroll down </ScrollButtonText>
                        <UilArrowDown className="scroll__arrow" />
                    </ScrollButton>
                </HomeScroll>
            </HomeContaier>
        </Section>
    );
};

export default Home;
