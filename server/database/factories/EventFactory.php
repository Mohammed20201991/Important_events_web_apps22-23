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
        return [
                'title'       => $this-> faker->word(),
                'note'        => $this-> faker->sentence(),
                'location'    => $this->faker->numerify('BGH-####'),
                'DateOfEvent' => $this->faker->randomElement(['EVENT1',
                                                    'EVENT2','EVENT3','EVENT4','EVENT5','EVENT6']),
        ];
    }
}
