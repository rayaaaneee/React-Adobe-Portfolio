<?php

$tmp = '';
if ($isSuccess) {
    $tmp = 'success';
} else {
    $tmp = 'error';
} ?>

<head>
    <link rel="stylesheet" href="<?= PATH_CSS; ?>general/error.css">
</head>
<div class="<?= $tmp; ?>-message-container message-container">
    <div class="cross-container" onclick="crossClick();">
        <div class="cross">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
        </div>
    </div>
    <img src="<?= PATH_IMAGES . 'error/' . $tmp . '.png' ?>" alt="<?= $tmp; ?>" draggable="false">
    <div class="<?= $tmp; ?>-message">
        <p><?= $returnMessage; ?></p>
    </div>
</div>