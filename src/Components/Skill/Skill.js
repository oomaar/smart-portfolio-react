import { Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import UilAngleDown from "@iconscout/react-unicons/icons/uil-angle-down";
import {
    SkillContainer,
    SkillContent,
    SkillHeader,
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
import { useState } from "react";

const Skill = ({ data }) => {
    const [toggleShow, setToggleShow] = useState(false);

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
            <SkillContainer className="container grid">
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

                            <UilAngleDown
                                className={`skill__arrow ${toggleShow === skill.id && 'skill__arrow-open'}`}
                            />
                        </SkillHeader>
                        <SkillList className="grid">
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
        </Section>
    );
};

export default Skill;
