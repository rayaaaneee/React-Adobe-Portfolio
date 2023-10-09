import { animateApparition } from '../functions/appearence';
import { animateImageLoading } from '../functions/animateImageLoading';
import { ManageBody } from '../functions/manageBody';
import { useEffect } from 'react';

import '../asset/css/course/style.scss';
import '../asset/css/course/semester-page.scss';
import '../asset/css/course/dark-style.scss';

import { Semester } from '../objects/semester';


import semesterJson from '../asset/data/course/semester.json';


const Course = () => {

    useEffect(() => {
        animateApparition();
        animateImageLoading();
    }, []);;

    ManageBody.changeClass('course');

    useEffect(() => {
        document.title = 'Mon parcours';
    });

    return (
        <>
        </>
    );
}

export default Course;