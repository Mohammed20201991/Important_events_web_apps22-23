<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // first seed as static data
        $arr = array( "a"=>"12-06-2017", "b"=>"12-07-2017", "c"=>"12-08-2017",
        "d"=>"12-09-2017" ,"e"=>"01-01-2018" ,"f"=>"05-01-2018" , );
        shuffle($arr);

        Event::create([
            'title'         => 'Top Computer Vision Conferences 2022',
            'note'          => 'It can be quite challenging to keep an overview of the multitude of different AI Expert gatherings across the globe, ranging from small-scale meetups to international conferences with thousands of attendees. Therefore, we have gathered the most important conferences below, based on scientific relevance. The relevance is indicated by the h5-index which Google Scholar computes for the publications of each conference, based on the authors H-indices',
            'location'      => 'IRAQ-BAGHDAD',
            'DateOfEvent' =>  $arr[0],
        ]);
        Event::create([
            'title'         => 'Top General Machine Learning Conferences',
            'note'          => 'It can be quite challenging to keep an overview of the multitude of different AI Expert gatherings across the globe, ranging from small-scale meetups to international conferences with thousands of attendees. Therefore, we have gathered the most important conferences below, based on scientific relevance. The relevance is indicated by the h5-index which Google Scholar computes for the publications of each conference, based on the authors H-indices',
            'location'      => 'IRAQ-BAGHDAD',
            'DateOfEvent' =>  $arr[1],
        ]);

        Event::create([
            'title'         => 'International Conference on Web Engineering',
            'note'          => 'It can be quite challenging to keep an overview of the multitude of different AI Expert gatherings across the globe, ranging from small-scale meetups to international conferences with thousands of attendees. Therefore, we have gathered the most important conferences below, based on scientific relevance. The relevance is indicated by the h5-index which Google Scholar computes for the publications of each conference, based on the authors H-indices',
            'location'      => 'Hungary-Budapest',
            'DateOfEvent' =>  $arr[2],
        ]);


        // seed random data
        Event::factory(5)-> create();
    }
}
