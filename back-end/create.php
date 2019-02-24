<?php

header("Access-Control-Allow-Origin:*");
header("Content-Type:application/x-www-form-urlencoded; charset=UTF-8");
header("Access-Control-Allow-Methods:POST");
header("Access-Control-Max-Age:3600");
header("Access-Control-Allow-Headers:Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once("database.php");
include_once("clients.php");
include_once("save/chengeInput.php");
include_once ("save/iteratioInpObj.php");

class Create extends Clients
{
    public function fowardData($Input, $Iteratio)
    {  
      
        $inpObj =  $Input->readInput('php://input');
        $inpArr =  $Input->setVars($this->keyProperties(),$inpObj);
                
        $arr = $Iteratio->iteratio($inpArr, $this);
        $this->setValueProperties($arr);
         
        $stmt = $this->create();
        $this->bindResult($stmt, array_keys($arr));
        $this->exe($stmt) ? $this->message(["message" => "client was added"],'201') : $this->message(["message" => "Unable to add client" ],'503') ;
        
    }
}
$database = new Database();
$db = $database->getConnection();
$create = new Create($db); 
$input = new chengeInput();
$iteratio = new IteratioInpObj();
$create->fowardData($input, $iteratio);








