<?php
function displayMessageSent($bool)
{
    if ($bool) {
        $img = PATH_IMAGES . "contact/checked.png";
        return <<<HTML
        <div id="hasSend">
         <img src="$img" draggable="false">
         <p>Votre message a bien été envoyé !</p>
      </div> 
HTML;
    }
}
