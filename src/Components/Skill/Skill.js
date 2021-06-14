import UilBracketsCurly from "@iconscout/react-unicons/icons/uil-brackets-curly";
import UilAngleDown from "@iconscout/react-unicons/icons/uil-angle-down";
import {
    SkillContent,
    SkillHeader,
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
import skillsData from "../../data/skillsData.json";

const Skill = () => {
    return (
        <div>
            {skillsData.map(skill => (
                <SkillContent key={skill.id}>
                    <SkillHeader>
                        <UilBracketsCurly className=" skills__icon" />

                        <div>
                            <SkillTitle>{skill.title}</SkillTitle>
                            <SkillSubTitle>{skill.subTitle}</SkillSubTitle>
                        </div>

                        <UilAngleDown className="skills__arrow" />
                    </SkillHeader>
                    {skill.skills.map(item => (
                        <SkillList className="grid" key={item.id}>
                            <SkillData>
                                <SkillTitles>
                                    <SkillName>{item.name}</SkillName>
                                    <SkillNumber>{item.number}</SkillNumber>
                                </SkillTitles>
                                <SkillBar>
                                    <SkillPercentage className="skills__html"></SkillPercentage>
                                </SkillBar>
                            </SkillData>
                        </SkillList>
                    ))}
                </SkillContent>
            ))}
        </div>
    );
};

export default Skill;
