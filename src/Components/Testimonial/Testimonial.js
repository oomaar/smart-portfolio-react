import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import UilStar from "@iconscout/react-unicons/icons/uil-star";
import { Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import { testimonialData } from "../../data/testimonialData";
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

const Testimonial = () => {
    return (
        <Section>
            <SectionTitle>Testimonial</SectionTitle>
            <SectionSubtitle>My client saying</SectionSubtitle>

            <TestimonialContainer className="container">
                <Swiper
                    loop='true'
                    pagination={{ clickable: true }}
                >
                    {testimonialData.map(testimonial => (
                        <SwiperSlide>
                            <TestimonialData>
                                <TestimonialHeader>
                                    <TestimonialImage src={testimonial.src} alt={testimonial.alt} />

                                    <div>
                                        <TestimonialName>{testimonial.name}</TestimonialName>
                                        <TestimonialClient>{testimonial.client}</TestimonialClient>
                                    </div>
                                </TestimonialHeader>

                                <div>
                                    <UilStar className="testimonial__icon-star" />
                                    <UilStar className="testimonial__icon-star" />
                                    <UilStar className="testimonial__icon-star" />
                                    <UilStar className="testimonial__icon-star" />
                                    <UilStar className="testimonial__icon-star" />
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
