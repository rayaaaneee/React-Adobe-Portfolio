<?php

require_once PATH_CLASSES . 'FetchJSON.php';
require_once PATH_CLASSES . 'Semester.php';

$semestersArray = FetchJSON::fetchLocalJSON(PATH_DATAS . 'course/semester.json');

$semesters = Semester::processRow($semestersArray);
$nbSemesters = count($semesters);

require_once PATH_VIEWS_PARTS . 'header.php';

require_once PATH_VIEWS . 'course.php';
