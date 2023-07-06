<?php

class MessageDAO
{
    public static PDO $db;

    public static function getAllMessages(): array
    {
        self::$db = Connection::getInstance()->getPDO();

        // Préparation de la requête
        $sql = "SELECT * FROM message";

        // Préparation de la requête
        $stmt = self::$db->prepare($sql);

        // Exécution de la requête
        try {
            $stmt->execute();
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }

        $messages = $stmt->fetchAll(PDO::FETCH_CLASS, 'MessageDTO');

        return $messages;
    }

    public static function getMessageById($id): array|false
    {
        self::$db = Connection::getInstance()->getPDO();

        // Préparation de la requête
        $sql = "SELECT * FROM message WHERE id = :id";

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

        $result = $stmt->fetch();

        return $result;
    }
}
