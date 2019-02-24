<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

include_once 'database.php';
include_once 'clients.php';

class ReadOne extends Clients
{
    public function setResult()
    {
        return $this->setId() ?  $this->message($this->readOne(), '200') : $this->message(["message"=>"client's id is false"], '404');
    }
    private function setId()
    {
        return  $this->id = isset($_GET['id']) ? $_GET['id'] : null;
    }
}
$database = new Database();
$db = $database->getConnection();
$one = new ReadOne($db); 
$one->setResult();
