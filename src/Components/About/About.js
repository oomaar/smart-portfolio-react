import UilDownloadAlt from "@iconscout/react-unicons/icons/uil-download-alt";
import { Button, Section, SectionSubtitle, SectionTitle, ButtonIcon, Container, ButtonSpan } from "../../GlobalStyle";
import {
    AboutContainer,
    AboutImage,
    AboutDescription,
    AboutInfo,
    InfoTitle,
    InfoName,
    AboutBtns,
} from "./styledAbout";

const About = ({ data }) => {
    return (
        <Section id="about">
            <SectionTitle>About Me</SectionTitle>
            <SectionSubtitle>My introduction</SectionSubtitle>

            <Container>
                <AboutContainer>
                    <AboutImage src="/img/about.jpg" alt="About Me" />
                    <div>
                        <AboutDescription>{data.bio}</AboutDescription>

                        <AboutInfo>
                            <div>
                                <InfoTitle>{data.experienceYears}+</InfoTitle>
                                <InfoName>Years <br />
                                    experience
                                </InfoName>
                            </div>
                            <div>
                                <InfoTitle>{data.completedProjects}+</InfoTitle>
                                <InfoName>Completed <br />
                                    Projects
                                </InfoName>
                            </div>
                            <div>
                                <InfoTitle>{data.companiesWorked}+</InfoTitle>
                                <InfoName>Companies <br />
                                    Worked
                                </InfoName>
                            </div>
                        </AboutInfo>

                        <AboutBtns>
                            <Button
                                download=""
                                href="/pdf/Alexa-Cv.pdf"
                                flex
                            >
                                <ButtonSpan>Download CV</ButtonSpan>
                                <ButtonIcon>
                                    <UilDownloadAlt />
                                </ButtonIcon>
                            </Button>
                        </AboutBtns>
                    </div>
                </AboutContainer>
            </Container>
        </Section>
    );
};

export default About;
