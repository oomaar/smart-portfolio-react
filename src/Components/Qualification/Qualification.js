import UilGraduationCap from "@iconscout/react-unicons/icons/uil-graduation-cap";
import UilBriefcaseAlt from "@iconscout/react-unicons/icons/uil-briefcase-alt";
import UilCalendarAlt from "@iconscout/react-unicons/icons/uil-calendar-alt";
import { Section, SectionSubtitle, SectionTitle } from "../../GlobalStyle";
import {
    QualificationContainer,
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

const Qualification = () => {
    const [dataTarget, setDataTarget] = useState('education');

    return (
        <Section>
            <SectionTitle>Qualification</SectionTitle>
            <SectionSubtitle>My personal journey</SectionSubtitle>

            <QualificationContainer className="container">
                <QualificationTabs>
                    <QualificationButton
                        onClick={() => setDataTarget('education')}
                        class="button--flex"
                        data-target="#education"
                    >
                        <UilGraduationCap className="qualification__icon" />
                        Education
                    </QualificationButton>

                    <QualificationButton
                        onClick={() => setDataTarget('work')}
                        class="button--flex"
                        data-target="#work"
                    >
                        <UilBriefcaseAlt className="qualification__icon" />
                        Work
                    </QualificationButton>
                </QualificationTabs>

                <QualificationSections>
                    {/* QUALIFICATION CONTENT 1 */}
                    <QualificationContent
                        className={`${dataTarget === 'education' ? 'qualification__active' : ''}`}
                        data-content
                        id="education"
                    >
                        {/* QUALIFICATION 1*/}
                        <QualificationData>
                            <div>
                                <QualificationTitle>Computer Enginner</QualificationTitle>
                                <QualificationSubtitle>Peru - University</QualificationSubtitle>
                                <QualificationCalendar>
                                    <UilCalendarAlt />
                                    2009 - 2014
                                </QualificationCalendar>
                            </div>

                            <div>
                                <QualificationRounder></QualificationRounder>
                                <QualificationLine></QualificationLine>
                            </div>
                        </QualificationData>

                        {/* QUALIFICATION 2*/}
                        <QualificationData>
                            <div></div>

                            <div>
                                <QualificationRounder></QualificationRounder>
                                <QualificationLine></QualificationLine>
                            </div>

                            <div>
                                <QualificationTitle>Web Design</QualificationTitle>
                                <QualificationSubtitle>Spain - Institute</QualificationSubtitle>
                                <QualificationCalendar>
                                    <UilCalendarAlt />
                                    2014 - 2017
                                </QualificationCalendar>
                            </div>
                        </QualificationData>

                        {/* QUALIFICATION 3*/}
                        <QualificationData>
                            <div>
                                <QualificationTitle>Web Development</QualificationTitle>
                                <QualificationSubtitle>Peru - Institute</QualificationSubtitle>
                                <QualificationCalendar>
                                    <UilCalendarAlt />
                                    2017 - 2019
                                </QualificationCalendar>
                            </div>

                            <div>
                                <QualificationRounder></QualificationRounder>
                                <QualificationLine></QualificationLine>
                            </div>
                        </QualificationData>

                        {/* QUALIFICATION 4*/}
                        <QualificationData>
                            <div></div>

                            <div>
                                <QualificationRounder></QualificationRounder>
                            </div>

                            <div>
                                <QualificationTitle>Master in Ui/Ux</QualificationTitle>
                                <QualificationSubtitle>Peru - Institute</QualificationSubtitle>
                                <QualificationCalendar>
                                    <UilCalendarAlt />
                                    2019 - 2021
                                </QualificationCalendar>
                            </div>
                        </QualificationData>
                    </QualificationContent>

                    {/* QUALIFICATION CONTENT 2 */}
                    <QualificationContent
                        className={`${dataTarget === 'work' ? 'qualification__active' : ''}`}
                        data-content
                        id="work"
                    >
                        {/* QUALIFICATION 1*/}
                        <QualificationData>
                            <div>
                                <QualificationTitle>Software Enginner</QualificationTitle>
                                <QualificationSubtitle>Microsoft - Peru</QualificationSubtitle>
                                <QualificationCalendar>
                                    <UilCalendarAlt />
                                    2016 - 2018
                                </QualificationCalendar>
                            </div>

                            <div>
                                <QualificationRounder></QualificationRounder>
                                <QualificationLine></QualificationLine>
                            </div>
                        </QualificationData>

                        {/* QUALIFICATION 2*/}
                        <QualificationData>
                            <div></div>

                            <div>
                                <QualificationRounder></QualificationRounder>
                                <QualificationLine></QualificationLine>
                            </div>

                            <div>
                                <QualificationTitle>Frontend developer</QualificationTitle>
                                <QualificationSubtitle>Apple Inc - Spain</QualificationSubtitle>
                                <QualificationCalendar>
                                    <UilCalendarAlt />
                                    2018 - 2020
                                </QualificationCalendar>
                            </div>
                        </QualificationData>

                        {/* QUALIFICATION 3*/}
                        <QualificationData>
                            <div>
                                <QualificationTitle>UI Designer</QualificationTitle>
                                <QualificationSubtitle>Figma - Spain</QualificationSubtitle>
                                <QualificationCalendar>
                                    <UilCalendarAlt />
                                    2020 - Present
                                </QualificationCalendar>
                            </div>

                            <div>
                                <QualificationRounder></QualificationRounder>
                                <QualificationLine></QualificationLine>
                            </div>
                        </QualificationData>
                    </QualificationContent>
                </QualificationSections>
            </QualificationContainer>
        </Section>
    );
};

export default Qualification;
