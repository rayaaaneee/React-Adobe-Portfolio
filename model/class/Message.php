<?php

class Message
{
    private int $id;

    private string $name;
    private string $email;
    private string $message;
    private string $dateString;
    private string $timeString;

    public function __construct($name, $email, $message, $date, $time)
    {
        $this->name = $name;
        $this->email = $email;
        $this->message = $message;


        $this->dateString = $date;
        $this->timeString = $time;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getName()
    {
        return $this->name;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function getMessage()
    {
        return $this->message;
    }

    public function getDate()
    {
        return $this->dateString;
    }

    public function getTime()
    {
        return $this->timeString;
    }

    public function __toString()
    {
        return "Name: " . $this->name . " Email: " . $this->email . " Message: " . $this->message . " Date: " . $this->dateString . " Time: " . $this->timeString;
    }
}
