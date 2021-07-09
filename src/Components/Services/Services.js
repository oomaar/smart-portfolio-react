import UilArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import UilCheckCircle from "@iconscout/react-unicons/icons/uil-check-circle";
import { Button, ButtonIcon, ButtonSpan, Container, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    ServicesContainer,
    ServicesContent,
    ServicesIcon,
    ServicesTitle,
    ServicesButton,
    ServicesModal,
    ServicesModalContent,
    ServicesModalTitle,
    ServicesModalClose,
    ServicesModalServices,
    ServicesModalService,
    ServicesModalIcon,
} from "./styledServices";
import { useState } from "react";

const Services = ({ data }) => {
    const [active, setActive] = useState(false);

    const handleActive = (index) => {
        if (active === index) {
            return setActive(null);
        };

        setActive(index);
    };

    return (
        <Section id="services">
            <SectionTitle>Services</SectionTitle>
            <SectionSubtitle>What I offer</SectionSubtitle>

            <Container>
                <ServicesContainer>
                    {data.map((service, index) => (
                        <ServicesContent key={index}>
                            <div>
                                <ServicesIcon>
                                    <i className={`${service.icon}`}></i>
                                </ServicesIcon>
                                <ServicesTitle>
                                    {service.title} <br />
                                    {service.profession}
                                </ServicesTitle>
                            </div>

                            <Button
                                onClick={() => handleActive(index)}
                                link
                            >
                                <ServicesButton>
                                    <ButtonSpan>{service.buttonText}</ButtonSpan>
                                    <ButtonIcon>
                                        <UilArrowRight />
                                    </ButtonIcon>
                                </ServicesButton>
                            </Button>

                            <ServicesModal active={active === index}>
                                <ServicesModalContent>
                                    <ServicesModalTitle>
                                        {service.title} <br />
                                        {service.profession}
                                    </ServicesModalTitle>
                                    <ServicesModalClose>
                                        <UilTimes onClick={() => setActive(false)} />
                                    </ServicesModalClose>
                                    <ServicesModalServices>
                                        {service.service.map((item, i) => (
                                            <ServicesModalService key={i}>
                                                <ServicesModalIcon>
                                                    <UilCheckCircle />
                                                </ServicesModalIcon>
                                                <p>{item}</p>
                                            </ServicesModalService>
                                        ))}
                                    </ServicesModalServices>
                                </ServicesModalContent>
                            </ServicesModal>
                        </ServicesContent>
                    ))}
                </ServicesContainer>
            </Container>
        </Section>
    );
};

export default Services;
