<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreEventRequest extends FormRequest
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
            'title'=> 'required',
            'note' =>  'nullable',
            'location' => 'nullable',
            // 'DateOfEvent' => ['required',
            //                   Rule::in(['EVENT1','EVENT2','EVENT3','EVENT4','EVENT5','EVENT6']),
            //                  ]
            'DateOfEvent' => ['required',
            Rule::in(['12-06-2017','17-10-2017','02-09-2017','10-11-2017','01-01-2018','05-01-2018']),
                                 ]
        ];
    }
}
