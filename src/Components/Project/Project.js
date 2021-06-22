import UilMessage from "@iconscout/react-unicons/icons/uil-message";
import { Button, Section } from "../../GlobalStyle";
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
                <ProjectContainer className="container grid">
                    <ProjectData>
                        <ProjectTitle>You have a new project !</ProjectTitle>
                        <ProjectSubtitle>
                            Contact me now and get a 30% discount on your new project.
                        </ProjectSubtitle>
                        <Button
                            href="#contact"
                            className="button--flex button--white">
                            Contact Me
                            <UilMessage className="project__icon button__icon" />
                        </Button>
                    </ProjectData>
                    <ProjectImage src="/img/project.png" alt="Project img" />
                </ProjectContainer>
            </ProjectBackground>
        </Section>
    );
};

export default Project;
