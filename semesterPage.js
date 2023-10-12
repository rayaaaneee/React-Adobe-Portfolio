const semesterPage = document.querySelector("#semesterPage");
const backgroundSemesterPage = semesterPage.querySelector(".background-semester-page");
const crossSemesterPage = semesterPage.querySelector(".cross-semester-page-container");
const semesterPageMainContainer = semesterPage.querySelector(".semester-page-main-container");
const semesterPageTitle = semesterPage.querySelector(".title-semester");
const semesterPageTitleImg = semesterPage.querySelector("#semesterPage .semester-page-title-img-container img");
const semesterPageStartingDate = semesterPage.querySelector(".semester-page-starting-date");
const semesterPageEndingDate = semesterPage.querySelector(".semester-page-ending-date");
const semesterPageSchoolImage = semesterPage.querySelector(".semester-school-img");
const semesterPageSchoolName = semesterPage.querySelector(".semester-school-name");
const semesterPageSchoolLocation = semesterPage.querySelector(".semester-school-location");
const semesterPageSchoolAddress = semesterPage.querySelector(".semester-school-address");
const semesterPageSpecialtiesTexts = semesterPage.querySelectorAll(".semester-page-specialty");

const semesterPageSpecialtiesPart = semesterPage.querySelector(".semester-specialties-part");
const semesterPageSubjectsPart = semesterPage.querySelector(".semester-subjects-part");
const semesterPageSubjectsImageContainer = semesterPage.querySelector(".semester-page-subjects");
const semesterPageSubjectImage = semesterPage.querySelector(".semester-page-subjects-image");

const timeAnimationSemesterPage = 800;
var lastArrowClicked = null;

const openSemesterPage = (arrow, event) => {
    lastArrowClicked = arrow;
    lastArrowClicked.classList.remove('active');


    semester = arrow.closest(".project");
    event.stopPropagation();

    const hasSpecialties = Boolean(semester.querySelector(".has-specialties").textContent);

    if (hasSpecialties) {
        semesterPageSpecialtiesPart.style.display = "block";
        let semesterSpecialties = semester.querySelectorAll(".specialty");
        for (let i = 0; i < semesterSpecialties.length; i++) {
            semesterPageSpecialtiesTexts[i].textContent = semesterSpecialties[i].textContent;
        }
    } else {
        semesterPageSpecialtiesPart.style.display = "none";
    }

    const hasSubjects = Boolean(semester.querySelector(".has-subjects").textContent);

    if (hasSubjects) {
        let subject = semester.querySelector(".subject");
        semesterPageSubjectsPart.style.display = "block";
        semesterPageSubjectImage.src = subject.textContent;
    } else {
        semesterPageSubjectsPart.style.display = "none";
    }

    let semesterHiddenInformations = semester.querySelector(".hidden-informations");
    let semesterTitle = semesterHiddenInformations.querySelector(".title-semester");
    let semesterTitleImg = semesterHiddenInformations.querySelector(".icon-white");
    let semesterStartingDate = semesterHiddenInformations.querySelector(".starting-date");
    let semesterEndDate = semesterHiddenInformations.querySelector(".ending-date");
    let semesterSchoolIcon = semesterHiddenInformations.querySelector(".school-icon");
    let semesterSchoolName = semesterHiddenInformations.querySelector(".school-name");
    let semesterSchoolLocation = semesterHiddenInformations.querySelector(".school-location");
    let semesterSchoolAddress = semesterHiddenInformations.querySelector(".school-address");

    semesterPageTitle.textContent = semesterTitle.textContent;

    semesterPageTitleImg.src = semesterTitleImg.textContent;

    semesterPageStartingDate.textContent = semesterStartingDate.textContent;

    semesterPageEndingDate.textContent = semesterEndDate.textContent;

    semesterPageSchoolImage.src = semesterSchoolIcon.textContent;

    semesterPageSchoolName.textContent = semesterSchoolName.textContent;

    semesterPageSchoolLocation.textContent = semesterSchoolLocation.textContent;

    semesterPageSchoolAddress.textContent = semesterSchoolAddress.textContent;

    semesterPage.classList.add("visible");

    setTimeout(() => {
        document.body.style.overflowY = "hidden";
        backgroundSemesterPage.style.opacity = 1;
        semesterPageMainContainer.classList.add("visible");
        crossSemesterPage.style.transform = "none";
    }, timeAnimationSemesterPage/2);
};

const closeSemesterPage = () => {
    lastArrowClicked.classList.add('active');
    crossSemesterPage.style.removeProperty("transform");
    backgroundSemesterPage.style.opacity = 0;
    semesterPageMainContainer.classList.remove("visible");
    setTimeout(() => {
        semesterPageTitleImg.src = "";
        semesterPageTitle.textContent = "";
        semesterPageStartingDate.textContent = "";
        semesterPageEndingDate.textContent = "";
        semesterPageSchoolImage.src = "";
        semesterPageSchoolName.textContent = "";
        semesterPageSchoolLocation.textContent = "";
        semesterPageSchoolAddress.textContent = "";
        semesterPageSubjectImage.src = "";
        semesterPageSpecialtiesPart.style.removeProperty("display");
        semesterPageSubjectsPart.style.removeProperty("display");
        closeImageSemester();
        document.body.style.overflowY = "auto";
        semesterPage.classList.remove("visible");
    }, timeAnimationSemesterPage);
};

const openImageSemester = () => {
    semesterPageSubjectsImageContainer.style.display = "flex";
    crossSemesterPage.classList.add("hidden");
}

const closeImageSemester = () => {
    semesterPageSubjectsImageContainer.style.removeProperty("display");
    crossSemesterPage.classList.remove("hidden");
}