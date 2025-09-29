import { useCallback, useMemo, useRef, useState } from 'react';

import { useConditionalEffect } from '../../../hook/useConditionalEffect';

import dateImg from '../../../asset/img/background/calendar-pink.png';
import specialtiesImg from '../../../asset/img/background/specialties-pink.png';
import schoolImg from '../../../asset/img/background/school-pink.png';
import matterImg from '../../../asset/img/background/tab.png';

export const FrameSemester = ({ semester, onClose, language }) => {

    const isVisible = useMemo(() => semester != null, [semester]);
    const lastSemesterOpened = useRef(null);
    const currentSemester = useMemo(() => (semester || lastSemesterOpened.current), [semester]);


    const semesterPage = useRef(null);
    const crossSemesterPage = useRef(null);
    const semesterPageSubjectsContainer = useRef(null);

    useConditionalEffect(() => {

        if (isVisible) {
            document.addEventListener("keydown", closeSemesterPageOnEscape);
            semesterPage.current.scrollTo(0, 0);
            document.body.style.overflow = "hidden";
            semesterPage.current.classList.add("visible");
        } else {
            semesterPage.current.classList.add("hidden");
            semesterPage.current.classList.remove("visible");
            semesterPage.current.scrollTo({ top: 0 });
            setTimeout(() => {
                document.body.style.removeProperty("overflow");
                semesterPage.current.classList.remove("hidden");
            }, 400);
        }
    }, [isVisible]);

    const [isSubjectImageOpen, setIsSubjectImageOpen] = useState(false);

    useConditionalEffect(() => {
        if (isSubjectImageOpen) {
            crossSemesterPage.current.classList.add("hidden");
            semesterPageSubjectsContainer.current.classList.add("visible");
        } else {
            crossSemesterPage.current.classList.remove("hidden");
            semesterPageSubjectsContainer.current.classList.add("hidden");
            semesterPageSubjectsContainer.current.classList.remove("visible");
    
            setTimeout(() => {
                semesterPageSubjectsContainer.current.classList.remove("hidden");
            }, 300);
        }
    }, [isSubjectImageOpen]);

    const openSubjectsImageSemester = () => setIsSubjectImageOpen(true);
    const closeSubjectsImageSemester = () => setIsSubjectImageOpen(false);

    const closeSemesterPageOnEscape = useCallback((e) => {
        if (e.key === "Escape") {
            if (isSubjectImageOpen) {
                setIsSubjectImageOpen(false);
            } else if (isVisible) {
                document.removeEventListener("keydown", closeSemesterPageOnEscape);
                onClose();
            }
        }
    }, [isVisible, setIsSubjectImageOpen, isSubjectImageOpen, onClose]);

    return (
        <article ref={ semesterPage } id="semesterPage">
            { currentSemester && (
                <>
                    { currentSemester.hasMatters() && (
                        <div ref={ semesterPageSubjectsContainer } className="semester-page-subjects">
                            <div className="image-subject-container">
                                <img src={ require("../../../asset/img/background/semester/" + currentSemester.matters) } className="semester-page-subjects-image" alt="subjects" draggable="false" />
                                <div className="leave-semester-subject" onClick={ closeSubjectsImageSemester }>
                                </div>
                            </div>
                        </div>
                    ) }
                    <div className="semester-page-main-container">
                        <div className="semester-page-title-img-container">
                            <img className="semester-page-img" alt="icon-study" draggable="false" src={ require("../../../asset/img/background/" + currentSemester.whiteIcon) } />
                            <p className="title-semester">{ currentSemester.getTitle(language.current) }</p>
                        </div>
                        <div className="semester-page-body">
                            <div className="semester-part semester-date-part">
                                <div className="semester-page-date semester-page-title-part">
                                    <img src={ dateImg } alt='date-icon' draggable="false" />
                                    <div className="page-title-part"> Dates : </div>
                                </div>
                                <div className="semester-page-content semester-page-content-date">
                                    <div className="timeline-semester-date-container">
                                        <div className="timeline"></div>
                                        <div className="semester-point-container">
                                            <div className="semester-point"></div>
                                            <div className="semester-point"></div>
                                        </div>
                                    </div>
                                    <div className="text-semester-date-container">
                                        <p className="semester-page-starting-date">{ currentSemester.formatStartingDate() }</p>
                                        <p className="semester-page-ending-date">{ currentSemester.formatEndingDate() }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="semester-part semester-school-part">
                                <div className="semester-page-school semester-page-title-part">
                                    <img src={ schoolImg } alt="school-icon" draggable="false" />
                                    <div className="page-title-part">{ language.background.semester_frame.school } : </div>
                                </div>
                                <div className="semester-page-content">
                                    <img className="semester-school-img" alt="school-icon" draggable="false" src={ require("../../../asset/img/background/semester/" + currentSemester.schoolIcon) } />
                                    <div className="semester-school-text">
                                        <h3 className="semester-school-name">{ currentSemester.schoolName }</h3>
                                        <p className="semester-school-location">{ currentSemester.schoolLocation }</p>
                                        <p className="semester-school-address">{ currentSemester.schoolAddress }</p>
                                    </div>
                                </div>
                            </div>
                            { currentSemester.hasSpecialties() && (
                                <div className="semester-part semester-specialties-part">
                                    <div className="semester-page-specialties semester-page-title-part">
                                        <img src={ specialtiesImg } alt='specialties-icon' draggable="false" />
                                        <div className="page-title-part"> { language.background.semester_frame.specialties } : </div>
                                    </div>
                                    <div className="semester-page-content">
                                        { currentSemester.getSpecialties(language.current).map((specialty) => {
                                            return (
                                                <p className="semester-page-specialty">• { specialty }</p>
                                            );
                                        } ) }
                                    </div>
                                </div>
                            ) }
                            { currentSemester.hasMatters() && (
                                <div className="semester-part semester-subjects-part">
                                    <div className="semester-page-tab semester-page-title-part">
                                        <img src={ matterImg } alt="matters-icon" draggable="false" />
                                        <div className="page-title-part"> { language.background.semester_frame.subjects } : </div>
                                    </div>
                                    <div className="semester-page-content">
                                        <p className="semester-page-subject">{ language.background.semester_frame.subjects_text }</p>
                                        <button onClick={ openSubjectsImageSemester }>{ language.background.semester_frame.see_subjects }</button>
                                    </div>
                                </div>
                            ) }
                        </div>
                    </div>
                    <div className="all-cross-container">
                        <div ref={ crossSemesterPage } className="cross-semester-page-container" onClick={ onClose }>
                        </div>
                    </div>
                    <div className="background-semester-page"></div>
                </>
            ) }
        </article>
    )
}
