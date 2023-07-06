<?php

// Le fichier est situé dans le dossier controller du site donc on remonte d'un dossier

require_once 'config.php';

require_once PATH_PRESENTERS . 'contactPresenter.php';

require_once PATH_CLASSES . "Message.php";
require_once PATH_DTO . "MessageDTO.php";


// Données formulaire
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);
$date = date("Y-m-d");

// Mettre l'heure de paris
$time = new DateTime('now');
$time->setTimezone(new DateTimeZone('Europe/Paris'));
$time = $time->format('H:i:s');


// BD
$message = new Message($name, $email, $message, $date, $time);

// On affiche le message d'erreur s'il y en a un
$isSuccess = true;
$returnMessage = "Votre message a bien été envoyé !";

try {
    MessageDTO::insertMessage($message);
} catch (Exception $e) {
    $isSuccess = false;
    $returnMessage = "Une erreur est survenue lors de l'envoi du message";
}

require_once PATH_VIEWS_PARTS . 'error.php';
