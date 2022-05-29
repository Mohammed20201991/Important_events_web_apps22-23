<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateEventRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'title'=> 'sometimes|required',
            'note' =>  'sometimes',
            'location' => 'sometimes',
            'DateOfEvent' => ['sometimes',
                              'required',
                              Rule::in(['EVENT1','EVENT2','EVENT3','EVENT4','EVENT5','EVENT6']),
                             ]
        ];
    }
}
