<?php
class Database
{
  

   

    private $host = "localhost";
    private $db_name = "pawulon1_mini";
    private $user_name = "root";
    private $password = "";
    public $connection;

    public function getConnection()
    {
        $this->connection = null;
            try{
                $this->connection =new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->user_name, $this->password );
                $this->connection->exec("set names utf8");
            }catch(PDOExeption $exeption) {
                echo "Connection error:" . $exeption->getMessage();
            }
        return $this->connection;
    }

        
}
