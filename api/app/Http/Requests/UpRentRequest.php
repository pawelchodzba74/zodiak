<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpRentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "name"    => "required|string|max:255",
            "email"  => "required|email",
            "room"  => "array",
            "room.*"  => "required|digits_between:1,6|distinct",
            "telephon" => "digits:9",
            "start" => "required|date|before:end",
            "end" => "required|date|after:start",
            "description" => "nullable|string|max:255",
            "price" => "nullable|max:99999|numeric"
        ];
    }
}
