import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import { portfolioData } from "../../data/portfolioData";
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
import { useRef } from 'react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Portfolio = () => {
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
                    {portfolioData.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <PortfolioContent className="grid swiper-slide">
                                {/* <SwiperSlide className='grid' key={slide.id}> */}
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
                                {/* </SwiperSlide> */}
                            </PortfolioContent>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <ArrowNext ref={navigationNextRef} className="swiper-button-next">
                    <UilAngleRightB className="swiper-portfolio-icon" />
                </ArrowNext>
                <ArrowPrev ref={navigationPrevRef} className="swiper-button-prev">
                    <UilAngleleftB className="swiper-portfolio-icon" />
                </ArrowPrev>
                <div className="swiper-pagination"></div>
            </PortfolioContainer>
        </Section>
    );
};

export default Portfolio;
