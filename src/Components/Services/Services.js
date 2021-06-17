import UilWebGrid from "@iconscout/react-unicons/icons/uil-web-grid";
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
import { servicesData } from "../../data/servicesData";

const Services = () => {
    const [active, setActive] = useState(false);

    const handleActive = (index) => {
        if (active === index) {
            return setActive(null);
        };

        setActive(index);
    };

    return (
        <Section>
            <SectionTitle>Services</SectionTitle>
            <SectionSubtitle>What I offer</SectionSubtitle>

            <ServicesContainer className="container grid">
                {servicesData.map((service, index) => (
                    <ServicesContent key={index}>
                        <div>
                            <UilWebGrid className="services__icon" />
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
                                    <ServicesModalService>
                                        <UilCheckCircle className="services__modal-icon" />
                                        <p>{service.service1}</p>
                                    </ServicesModalService>
                                    <ServicesModalService>
                                        <UilCheckCircle className="services__modal-icon" />
                                        <p>{service.service2}</p>
                                    </ServicesModalService>
                                    <ServicesModalService>
                                        <UilCheckCircle className="services__modal-icon" />
                                        <p>{service.service3}</p>
                                    </ServicesModalService>
                                    <ServicesModalService>
                                        <UilCheckCircle className="services__modal-icon" />
                                        <p>{service.service4}</p>
                                    </ServicesModalService>
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
