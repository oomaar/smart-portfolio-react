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
    SkillNumber,
    SkillBar,
    SkillPercentage,
} from "./styledSkill";
import skillsData from "../../data/skillsData";
import { useState } from "react";

const Skill = () => {
    const [toggleShow, setToggleShow] = useState(false);

    const handleToggleShow = index => {
        if (toggleShow === index) {
            return setToggleShow(null);
        };

        setToggleShow(index);
    };

    return (
        <SkillContainer className="container grid">
            {skillsData.map(skill => (
                <SkillContent
                    key={skill.id}
                    onClick={() => handleToggleShow(skill.id)}>
                    <SkillHeader>
                        <SkillIcon>
                            {skill.icon}
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
                            skill.skills.map(item => (
                                // <SkillList className="grid">
                                <SkillData key={item.id}>
                                    <SkillTitles>
                                        <SkillName>{item.name}</SkillName>
                                        <SkillNumber>{item.number}</SkillNumber>
                                    </SkillTitles>
                                    <SkillBar>
                                        <SkillPercentage width={item.width}></SkillPercentage>
                                    </SkillBar>
                                </SkillData>
                                // </SkillList>
                            ))
                        ) : null}
                    </SkillList>
                </SkillContent>
            ))}
        </SkillContainer>
    );
};

export default Skill;
