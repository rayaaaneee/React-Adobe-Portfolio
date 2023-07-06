<?php

require_once PATH_CLASSES . 'FetchJSON.php';

$array_links = FetchJSON::FetchLocalJSON(PATH_DATAS . 'perso/music.json');
$music_links = $array_links['music']['links'];

require_once PATH_VIEWS_PARTS . 'header.php';

require_once PATH_VIEWS . 'perso.php';

require_once PATH_VIEWS_PARTS . 'footer.php';
