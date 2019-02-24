<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: POST");
header("Access-Control-Max-Age: 3600");
header("Content-Type: application/x-www-form-urlencoded; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


include_once 'database.php';
include_once 'clients.php';
include_once("save/chengeInput.php");

 class Delete extends Clients
 {
    public function del($Input)
    {
       
        $json = $Input->readInput('php://input');
        $this->id = $this->sanitization($json->id);
        $this->delete() ? $this->message(["message"=>"client został usunięty"],"200"):$this->message(["message"=>"client nie może być usunięty"],"500");

    }
         
 }
$database = new Database();
$db = $database->getConnection();
$del = new Delete($db); 
$input = new chengeInput();
$del->del($input);
