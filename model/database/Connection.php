<?php

class Connection
{
    private static ?self $instance = null;
    private ?PDO $connection = null;

    private function __construct()
    {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET . ";port=" . DB_PORT . "";

        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];

        $this->connection = new PDO($dsn, DB_USR, DB_PWD, $options);
    }

    public static function getInstance()
    {
        if (Connection::$instance == null) {
            Connection::$instance = new Connection();
        }

        return Connection::$instance;
    }

    public function getPDO()
    {
        return $this->connection;
    }
}
