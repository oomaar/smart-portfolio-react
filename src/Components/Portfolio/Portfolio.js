import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import UilArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right";
import { Button, ButtonIcon, ButtonSpan, Container, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    PortfolioContainer,
    PortfolioContent,
    PortfolioImage,
    PortfolioData,
    PortfolioButton,
    PortfolioTitle,
    PortfolioDesc,
    ArrowNext,
    ArrowPrev,
    SwiperPortfolioIcon,
} from "./styledPortfolio";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Portfolio = ({ data }) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <Section id="portfolio">
            <SectionTitle>Portfolio</SectionTitle>
            <SectionSubtitle>Most recent work</SectionSubtitle>
            <Container>

                <PortfolioContainer>
                    <Swiper
                        loop='true'
                        navigation={{
                            nextEl: navigationNextRef.current,
                            prevEl: navigationPrevRef.current
                        }}
                        onSwiper={(swiper) => {
                            // Delay execution for the refs to be defined
                            setTimeout(() => {
                                // Override prevEl & nextEl now that refs are defined
                                swiper.params.navigation.prevEl = navigationPrevRef.current
                                swiper.params.navigation.nextEl = navigationNextRef.current

                                // Re-init navigation
                                swiper.navigation.destroy()
                                swiper.navigation.init()
                                swiper.navigation.update()
                            })
                        }}
                        pagination={{ clickable: true }}
                    >
                        {data.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <PortfolioContent className="swiper-slide">
                                    <PortfolioImage src={slide.src} alt={slide.alt} />
                                    <PortfolioData>
                                        <PortfolioTitle>{slide.title}</PortfolioTitle>
                                        <PortfolioDesc>{slide.description}</PortfolioDesc>
                                        <Button
                                            href={slide.url}
                                            flex
                                            small
                                        >
                                            <PortfolioButton>
                                                <ButtonSpan>Demo</ButtonSpan>
                                                <ButtonIcon>
                                                    <UilArrowRight />
                                                </ButtonIcon>
                                            </PortfolioButton>
                                        </Button>
                                    </PortfolioData>
                                </PortfolioContent>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <ArrowNext ref={navigationNextRef} className="swiper-button-next">
                        <SwiperPortfolioIcon>
                            &#10095;
                        </SwiperPortfolioIcon>
                    </ArrowNext>
                    <ArrowPrev ref={navigationPrevRef} className="swiper-button-prev">
                        <SwiperPortfolioIcon>
                            &#10094;
                        </SwiperPortfolioIcon>
                    </ArrowPrev>
                    <div className="swiper-pagination"></div>
                </PortfolioContainer>
            </Container>
        </Section>
    );
};

export default Portfolio;
