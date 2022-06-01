<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $arr = array( "a"=>"12-06-2017", "b"=>"12-07-2017", "c"=>"12-08-2017",
        "d"=>"12-09-2017" ,"e"=>"01-01-2018" ,"f"=>"05-01-2018" , );
        shuffle($arr);
        return [
                'title'       => $this-> faker->word(),
                'note'        => $this-> faker->sentence(),
                'location'    => $this->faker->numerify('BGH-####'),
                // 'DateOfEvent' => $this->faker->randomElement(['EVENT1',
                //                                     'EVENT2','EVENT3','EVENT4','EVENT5','EVENT6']),
                'DateOfEvent' => $arr[2],
            ];
    }
}
