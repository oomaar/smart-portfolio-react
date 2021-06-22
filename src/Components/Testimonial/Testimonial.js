import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    TestimonialContainer,
    TestimonialData,
    TestimonialHeader,
    TestimonialImage,
    TestimonialName,
    TestimonialClient,
    TestimonialDesc,
} from "./styledTestimonial";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Testimonial = ({ data }) => {
    return (
        <Section>
            <SectionTitle>Testimonial</SectionTitle>
            <SectionSubtitle>My client saying</SectionSubtitle>

            <TestimonialContainer className="container">
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
                                    {testimonial.stars.map((star, i) => (
                                        <i key={i} className={star}></i>
                                    ))}
                                </div>
                            </TestimonialData>

                            <TestimonialDesc>{testimonial.description}</TestimonialDesc>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-pagination"></div>
            </TestimonialContainer>
        </Section>
    );
};

export default Testimonial;
