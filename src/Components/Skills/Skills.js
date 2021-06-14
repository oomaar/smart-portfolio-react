import { Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    SkillsContainer,
} from "./styledSkills";

const Skills = () => {
    return (
        <Section>
            <SectionTitle>Skills</SectionTitle>
            <SectionSubtitle>My technical level</SectionSubtitle>

            <SkillsContainer className="container grid">
                <div>
                    <Skill />
                </div>
            </SkillsContainer>
        </Section>
    );
};

export default Skills;
