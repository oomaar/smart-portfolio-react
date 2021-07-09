import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Container, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    TestimonialContainer,
    TestimonialData,
    TestimonialHeader,
    TestimonialImage,
    TestimonialName,
    TestimonialClient,
    TestimonialIconStar,
    TestimonialDesc,
} from "./styledTestimonial";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Testimonial = ({ data }) => {
    return (
        <Section>
            <SectionTitle>Testimonial</SectionTitle>
            <SectionSubtitle>My client saying</SectionSubtitle>

            <Container>
                <TestimonialContainer>
                    <Swiper
                        loop='true'
                        pagination={{ clickable: true }}
                    >
                        {data.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <TestimonialData>
                                    <TestimonialHeader>
                                        <TestimonialImage src={testimonial.src} alt={testimonial.alt} />

                                        <div>
                                            <TestimonialName>{testimonial.name}</TestimonialName>
                                            <TestimonialClient>{testimonial.client}</TestimonialClient>
                                        </div>
                                    </TestimonialHeader>

                                    <div>
                                        <TestimonialIconStar>
                                            {testimonial.stars.map((star, i) => (
                                                <i key={i} className={star}></i>
                                            ))}
                                        </TestimonialIconStar>
                                    </div>
                                </TestimonialData>

                                <TestimonialDesc>{testimonial.description}</TestimonialDesc>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-pagination"></div>
                </TestimonialContainer>
            </Container>
        </Section>
    );
};

export default Testimonial;
