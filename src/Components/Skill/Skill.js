import { useState } from "react";
import { Container, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import UilAngleDown from "@iconscout/react-unicons/icons/uil-angle-down";
import {
    SkillContainer,
    SkillContent,
    SkillHeader,
    SkillArrow,
    SkillIcon,
    SkillTitle,
    SkillSubTitle,
    SkillList,
    SkillData,
    SkillTitles,
    SkillName,
    SkillBar,
    SkillPercentage,
} from "./styledSkill";

const Skill = ({ data }) => {
    const [toggleShow, setToggleShow] = useState(1);

    const handleToggleShow = index => {
        if (toggleShow === index) {
            return setToggleShow(null);
        };

        setToggleShow(index);
    };

    return (
        <Section id="skills">
            <SectionTitle>Skills</SectionTitle>
            <SectionSubtitle>My technical level</SectionSubtitle>
            <Container>
                <SkillContainer>
                    {data.map((skill, index) => (
                        <SkillContent key={skill.id}>
                            <SkillHeader
                                onClick={() => handleToggleShow(skill.id)}
                            >
                                <SkillIcon>
                                    <i className={skill.icon}></i>
                                </SkillIcon>

                                <div>
                                    <SkillTitle>{skill.title}</SkillTitle>
                                    <SkillSubTitle>{skill.subTitle}</SkillSubTitle>
                                </div>

                                <SkillArrow toggleShow={toggleShow} skill={skill.id}>
                                    <UilAngleDown />
                                </SkillArrow>
                            </SkillHeader>
                            <SkillList>
                                {toggleShow === skill.id ? (
                                    data[index].skills.map(item => (
                                        <SkillData key={item.id}>
                                            <SkillTitles>
                                                <SkillName>{item.name}</SkillName>
                                                <span>{item.number}</span>
                                            </SkillTitles>
                                            <SkillBar>
                                                <SkillPercentage width={item.width}></SkillPercentage>
                                            </SkillBar>
                                        </SkillData>
                                    ))
                                ) : null}
                            </SkillList>
                        </SkillContent>
                    ))}
                </SkillContainer>
            </Container>
        </Section>
    );
};

export default Skill;
