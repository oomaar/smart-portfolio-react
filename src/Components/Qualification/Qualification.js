import { useState } from "react";
import UilGraduationCap from "@iconscout/react-unicons/icons/uil-graduation-cap";
import UilBriefcaseAlt from "@iconscout/react-unicons/icons/uil-briefcase-alt";
import UilCalendarAlt from "@iconscout/react-unicons/icons/uil-calendar-alt";
import { Container, Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    QualificationTabs,
    QualificationButton,
    QualificationIcon,
    QualificationSections,
    QualificationContent,
    QualificationData,
    QualificationTitle,
    QualificationSubtitle,
    QualificationCalendar,
    QualificationRounder,
    QualificationLine,
} from "./styledQualification";

const Qualification = ({ data }) => {
    const [dataTarget, setDataTarget] = useState('education');
    const [active, setActive] = useState(true);

    const selectQualification = qualification => {
        if (qualification === 'education') {
            setDataTarget('education');
            setActive(true);
        };

        if (qualification === 'work') {
            setDataTarget('work')
            setActive(false);
        };
    };

    const educationLength = data.education.length - 1;
    const workLength = data.work.length - 1;

    const educationGrid = data.education.map((qualification, index) => (
        <QualificationData key={index}>
            {qualification.id % 2 === 0 && (
                <>
                    <div></div>

                    <div>
                        <QualificationRounder></QualificationRounder>
                        {index !== educationLength && (
                            <QualificationLine></QualificationLine>
                        )}
                    </div>
                </>
            )}
            <div>
                <QualificationTitle>{qualification.title}</QualificationTitle>
                <QualificationSubtitle>{qualification.subtitle}</QualificationSubtitle>
                <QualificationCalendar>
                    <UilCalendarAlt />
                    {qualification.start} - {qualification.finish}
                </QualificationCalendar>
            </div>

            {qualification.id % 2 === 1 && (
                <div>
                    <QualificationRounder></QualificationRounder>
                    {index !== educationLength && (
                        <QualificationLine></QualificationLine>
                    )}
                </div>
            )}

            {(qualification.id === educationLength && (qualification.id % 2 === 1)) && (
                <div>
                    <QualificationRounder></QualificationRounder>
                </div>
            )}
        </QualificationData>
    ));

    const workGrid = data.work.map((qualification, index) => (
        <QualificationData key={index}>
            {qualification.id % 2 === 0 && (
                <>
                    <div></div>

                    <div>
                        <QualificationRounder></QualificationRounder>
                        {index !== workLength && (
                            <QualificationLine></QualificationLine>
                        )}
                    </div>
                </>
            )}

            <div>
                <QualificationTitle>{qualification.title}</QualificationTitle>
                <QualificationSubtitle>{qualification.subtitle}</QualificationSubtitle>
                <QualificationCalendar>
                    <UilCalendarAlt />
                    {qualification.start} - {qualification.finish}
                </QualificationCalendar>
            </div>

            {qualification.id % 2 === 1 && (
                <div>
                    <QualificationRounder></QualificationRounder>
                    {index !== workLength && (
                        <QualificationLine></QualificationLine>
                    )}
                </div>
            )}

            {(qualification.id === workLength && (qualification.id % 2 === 2)) && (
                <div>
                    <QualificationRounder></QualificationRounder>
                </div>
            )}
        </QualificationData>
    ));

    return (
        <Section>
            <SectionTitle>Qualification</SectionTitle>
            <SectionSubtitle>My personal journey</SectionSubtitle>
            <Container>
                <QualificationTabs>
                    <QualificationButton
                        onClick={() => selectQualification('education')}
                        active={active}
                    >
                        <QualificationIcon>
                            <UilGraduationCap />
                        </QualificationIcon>
                        Education
                    </QualificationButton>

                    <QualificationButton
                        onClick={() => selectQualification('work')}
                        active={!active}
                    >
                        <QualificationIcon>
                            <UilBriefcaseAlt />
                        </QualificationIcon>
                        Work
                    </QualificationButton>
                </QualificationTabs>

                <QualificationSections>
                    <QualificationContent dataTarget={dataTarget === 'education'}>
                        {educationGrid}
                    </QualificationContent>

                    <QualificationContent dataTarget={dataTarget === 'work'}>
                        {workGrid}
                    </QualificationContent>
                </QualificationSections>
            </Container>
        </Section>
    );
};

export default Qualification;
