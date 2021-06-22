import UilArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right";
import UilTimes from "@iconscout/react-unicons/icons/uil-times";
import UilCheckCircle from "@iconscout/react-unicons/icons/uil-check-circle";
import { Button, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    ServicesContainer,
    ServicesContent,
    ServicesTitle,
    ServicesModal,
    ServicesModalContent,
    ServicesModalTitle,
    ServicesModalServices,
    ServicesModalService,
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

            <ServicesContainer className="container grid">
                {data.map((service, index) => (
                    <ServicesContent key={index}>
                        <div>
                            <i className={`services__icon ${service.icon}`}></i>
                            <ServicesTitle>
                                {service.title} <br />
                                {service.profession}
                            </ServicesTitle>
                        </div>

                        <Button
                            onClick={() => handleActive(index)}
                            className="button--flex button--small button--link services__button"
                        >
                            {service.buttonText}
                            <UilArrowRight className="button__icon" />
                        </Button>

                        <ServicesModal className={`${active === index && 'active-modal'}`}>
                            <ServicesModalContent>
                                <ServicesModalTitle>
                                    {service.title} <br />
                                    {service.profession}
                                </ServicesModalTitle>
                                <UilTimes className="services__modal-close" onClick={() => setActive(false)} />
                                <ServicesModalServices className="grid">
                                    {service.service.map((item, i) => (
                                        <ServicesModalService key={i}>
                                            <UilCheckCircle className="services__modal-icon" />
                                            <p>{item}</p>
                                        </ServicesModalService>
                                    ))}
                                </ServicesModalServices>
                            </ServicesModalContent>
                        </ServicesModal>
                    </ServicesContent>
                ))}
            </ServicesContainer>
        </Section>
    );
};

export default Services;
