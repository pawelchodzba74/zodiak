<?php
class IteratioInpObj
{
    public function iteratio($inpArr, $Client)
    {
        $notRequired = $Client->notRequiredProerties();
        foreach ($inpArr as $key => $value) {
        if (!in_array($key, $notRequired)) {
             if (empty($value)) {
                $Client->message(["message"=>"$key is empty"],'400');
                die();
            }
        }    
           

            $inpArr[$key] = $Client->sanitization($value);
        }
        return $inpArr;
    }
        
 
}
