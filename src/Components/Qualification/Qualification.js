import UilGraduationCap from "@iconscout/react-unicons/icons/uil-graduation-cap";
import UilBriefcaseAlt from "@iconscout/react-unicons/icons/uil-briefcase-alt";
import UilCalendarAlt from "@iconscout/react-unicons/icons/uil-calendar-alt";
import { Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    QualificationTabs,
    QualificationButton,
    QualificationSections,
    QualificationContent,
    QualificationData,
    QualificationTitle,
    QualificationSubtitle,
    QualificationCalendar,
    QualificationRounder,
    QualificationLine,
} from "./styledQualification";
import { useState } from "react";

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
                    <UilCalendarAlt className="calendar-icon" />
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
                    <UilCalendarAlt className="calendar-icon" />
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

            <div className="container">
                <QualificationTabs>
                    <QualificationButton
                        onClick={() => selectQualification('education')}
                        className={`button--flex ${active && 'btn-active'}`}
                    >
                        <UilGraduationCap className="qualification__icon" />
                        Education
                    </QualificationButton>

                    <QualificationButton
                        onClick={() => selectQualification('work')}
                        className={`button--flex ${!active && 'btn-active'}`}
                    >
                        <UilBriefcaseAlt className="qualification__icon" />
                        Work
                    </QualificationButton>
                </QualificationTabs>

                <QualificationSections>
                    <QualificationContent
                        className={`${dataTarget === 'education' && 'qualification__active'}`}
                        data-content
                    >
                        {educationGrid}
                    </QualificationContent>

                    <QualificationContent
                        className={`${dataTarget === 'work' && 'qualification__active'}`}
                        data-content
                    >
                        {workGrid}
                    </QualificationContent>
                </QualificationSections>
            </div>
        </Section>
    );
};

export default Qualification;
