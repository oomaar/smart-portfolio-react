import UilMessage from "@iconscout/react-unicons/icons/uil-message";
import { Button, ButtonIcon, ButtonSpan, Container, Section } from "../../GlobalStyle";
import {
    ProjectBackground,
    ProjectContainer,
    ProjectData,
    ProjectTitle,
    ProjectSubtitle,
    ProjectImage,
} from "./styledProject";

const Project = () => {
    return (
        <Section>
            <ProjectBackground>
                <Container>
                    <ProjectContainer>
                        <ProjectData>
                            <ProjectTitle>You have a new project !</ProjectTitle>
                            <ProjectSubtitle>
                                Contact me now and get a 30% discount on your new project.
                            </ProjectSubtitle>
                            <Button
                                href="#contact"
                                flex
                                white
                            >
                                <ButtonSpan>Contact Me</ButtonSpan>
                                <ButtonIcon>
                                    <UilMessage />
                                </ButtonIcon>
                            </Button>
                        </ProjectData>
                        <ProjectImage src="/img/project.png" alt="Project img" />
                    </ProjectContainer>
                </Container>
            </ProjectBackground>
        </Section>
    );
};

export default Project;
