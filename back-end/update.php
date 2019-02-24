<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Method: POST");
header("Access-Control-Max-Age: 3600");
header("Content-Type: application/x-www-form-urlencoded; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



include_once 'database.php';
include_once 'clients.php';
include_once "save/chengeInput.php";
include_once "save/iteratioInpObj.php";

class Updata extends Clients          
{
    public function fowardData($Input, $Iteratio)
    {
        $inpObj =  $Input->readInput('php://input');
        $inpArr =  $Input->setVars($this->keyProperties(),$inpObj);
        if (isset($inpArr['id'])) {
            $arr = $Iteratio->iteratio($inpArr, $this);
            $this->setValueProperties($arr);
            $stmt = $this->update();
            $this->bindResult($stmt, array_keys($arr));
            $this->exe($stmt) ? $this->message(["message" => "client was update"],'201') : $this->message(["message" => "Unable to updata client"], '503');
        }else{
            $this->message(["message" => "client must have id"],'400');
       }
    }
}

$database = new Database();
$db = $database->getConnection();
$updata = new Updata($db); 
$input = new chengeInput();
$iteratio = new IteratioInpObj(); 
$updata->fowardData($input, $iteratio);
