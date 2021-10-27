import UilMessage from "@iconscout/react-unicons/icons/uil-message";
import UilMouseAlt from "@iconscout/react-unicons/icons/uil-mouse-alt";
import UilArrowDown from "@iconscout/react-unicons/icons/uil-arrow-down";
import { Button, ButtonIcon, Container, Section, ButtonSpan } from "../../GlobalStyle";
import { BackgroundAnimation } from "..";
import {
    HomeContaier,
    HomeContent,
    HomeSocial,
    SocialIcon,
    HomeImage,
    HomeBlob,
    HomeData,
    HomeTitle,
    HomeSubtitle,
    HomeDescription,
    HomeScroll,
    ScrollButton,
    ScrollMouse,
    ScrollButtonText,
} from "./styledHome";

const Home = ({ data }) => {
    const network = data.social.map((network) => {
        return (
            <SocialIcon key={network.name} href={network.url} target="_blank">
                <i className={network.class}></i>
            </SocialIcon>
        )
    });

    return (
        <Section id="home">
            <Container>
                <HomeContaier>
                    <HomeContent>
                        <HomeSocial>
                            {network}
                        </HomeSocial>

                        {/* <HomeImage>
                            <HomeBlob
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
                                        xlinkHref={data.image}
                                        x="12"
                                        y="18"
                                    />
                                </g>
                            </HomeBlob>
                        </HomeImage> */}

                        <HomeData>
                            <HomeTitle>Hi, I'm {data.name}</HomeTitle>
                            <HomeSubtitle>{data.title}</HomeSubtitle>
                            <HomeDescription>{data.description}</HomeDescription>
                            <Button href="#contact" flex>
                                <ButtonSpan>Contact Me</ButtonSpan>
                                <ButtonIcon>
                                    <UilMessage />
                                </ButtonIcon>
                            </Button>
                        </HomeData>

                        <div>
                            <BackgroundAnimation />
                        </div>
                    </HomeContent>

                    <HomeScroll>
                        <ScrollButton href="#about" flex>
                            <ScrollMouse>
                                <UilMouseAlt />
                            </ScrollMouse>
                            <ScrollButtonText> Scroll down </ScrollButtonText>
                            <UilArrowDown />
                        </ScrollButton>
                    </HomeScroll>
                </HomeContaier>
            </Container>
        </Section>
    );
};

export default Home;
