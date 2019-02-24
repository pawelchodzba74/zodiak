<?php
class chengeInput
{
    public function readInput($input)
    {
        $inpObj = file_get_contents($input);
        return json_decode($inpObj);
    }
    public function setVars($keys,$obj)
    {
        $vars = get_object_vars($obj);
        extract($vars);
        return compact($keys);
    }
        
   
}
