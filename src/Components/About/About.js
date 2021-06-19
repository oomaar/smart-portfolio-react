import UilDownloadAlt from "@iconscout/react-unicons/icons/uil-download-alt";
import { Button, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    AboutContainer,
    AboutImage,
    AboutData,
    AboutDescription,
    AboutInfo,
    InfoTitle,
    InfoName,
    AboutBtns,
} from "./styledAbout";

const About = () => {
    return (
        <Section id="about">
            <SectionTitle>About Me</SectionTitle>
            <SectionSubtitle>My introduction</SectionSubtitle>

            <AboutContainer className="container grid">
                <AboutImage src="/img/about.jpg" alt="About Me" />
                <AboutData>
                    <AboutDescription>
                        Web developer, with extensive knowledge and years of experience,
                        working in web technologies and UI/UX design, deleivering quality
                        work.
                    </AboutDescription>

                    <AboutInfo>
                        <div>
                            <InfoTitle>08+</InfoTitle>
                            <InfoName>Years <br />
                                experience
                            </InfoName>
                        </div>
                        <div>
                            <InfoTitle>20+</InfoTitle>
                            <InfoName>Completed <br />
                                Projects
                            </InfoName>
                        </div>
                        <div>
                            <InfoTitle>05+</InfoTitle>
                            <InfoName>Companies <br />
                                Worked
                            </InfoName>
                        </div>
                    </AboutInfo>
                </AboutData>

                <AboutBtns className="about__buttons">
                    <Button
                        download=""
                        // href="assets/pdf/Alexa-Cv.pdf"
                        className="button--flex">
                        Download CV<UilDownloadAlt className="button__icon" />
                    </Button>
                </AboutBtns>
            </AboutContainer>
        </Section>
    );
};

export default About;
