import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import UilArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right";
import UilAngleRightB from "@iconscout/react-unicons/icons/uil-angle-right-b";
import UilAngleleftB from "@iconscout/react-unicons/icons/uil-angle-left-b";
import { Button, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    PortfolioContainer,
    PortfolioContent,
    PortfolioImage,
    PortfolioData,
    PortfolioTitle,
    PortfolioDesc,
    ArrowNext,
    ArrowPrev,
} from "./styledPortfolio";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Portfolio = ({ data }) => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <Section id="portfolio">
            <SectionTitle>Portfolio</SectionTitle>
            <SectionSubtitle>Most recent work</SectionSubtitle>

            <PortfolioContainer className="container">
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
                            <PortfolioContent className="grid swiper-slide">
                                <PortfolioImage src={slide.src} alt={slide.alt} />
                                <PortfolioData>
                                    <PortfolioTitle>{slide.title}</PortfolioTitle>
                                    <PortfolioDesc>{slide.description}</PortfolioDesc>
                                    <Button
                                        href="#"
                                        className="button--flex button--small portfolio__button"
                                    >
                                        Demo
                                        <UilArrowRight className="button__icon" />
                                    </Button>
                                </PortfolioData>
                            </PortfolioContent>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <ArrowNext ref={navigationNextRef} className="swiper-button-next">
                    <UilAngleRightB className="swiper-portfolio-icon portfolio__arrow" />
                </ArrowNext>
                <ArrowPrev ref={navigationPrevRef} className="swiper-button-prev">
                    <UilAngleleftB className="swiper-portfolio-icon portfolio__arrow" />
                </ArrowPrev>
                <div className="swiper-pagination"></div>
            </PortfolioContainer>
        </Section>
    );
};

export default Portfolio;
