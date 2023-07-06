<?php

class MessageDTO
{
    public static PDO $db;

    public static function insertMessage($message)
    {
        self::$db = Connection::getInstance()->getPDO();

        // Préparation de la requête
        $sql = "INSERT INTO message (name, email, content, date, time) VALUES (:name, :email, :content, :date, :time)";

        // Préparation de la requête
        $name = $message->getName();
        $email = $message->getEmail();
        $stringMessage = $message->getMessage();
        $date = $message->getDate();
        $time = $message->getTime();

        $stmt = self::$db->prepare($sql);
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':content', $stringMessage);
        $stmt->bindParam(':date', $date);
        $stmt->bindParam(':time', $time);

        // Exécution de la requête
        try {
            $stmt->execute();
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }

        return true;
    }

    public static function deleteMessage($id)
    {
        self::$db = Connection::getInstance()->getPDO();

        // Préparation de la requête
        $sql = "DELETE FROM message WHERE id = :id";

        // Préparation de la requête
        $stmt = self::$db->prepare($sql);
        $stmt->bindParam(':id', $id);

        // Exécution de la requête
        try {
            $stmt->execute();
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }

        return true;
    }
}
