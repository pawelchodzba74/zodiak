<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json; charset=UTF-8");

include_once 'database.php';
include_once 'clients.php';

class Read extends Clients
{
    public function checkAmountRow()
    {
       return  ($this->read()->rowCount()) ? $this->read() : null;
    }
    public function setResult()
    {
        $arrResult['records']=[]; 
        if ($stmt = $this->checkAmountRow()) {
            $keys = $this->keyProperties();
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                extract($row);        
                array_push($arrResult['records'], compact($keys));
            }
        }else{
            $arrResult = $this->message(["message"=>"nomber of rows is null"],"400");
        }
         $this->message($arrResult, '200');
    }
}
$database = new Database();
$db = $database->getConnection();

$name = new Read($db); 
$name->setResult();



