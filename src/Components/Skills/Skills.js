import { Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import { Skill } from "..";
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
