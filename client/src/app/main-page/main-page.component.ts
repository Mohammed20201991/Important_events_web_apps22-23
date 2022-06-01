import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public introduction  = "The most important events for AI Conferences in 2022";
  public number_of_events = 6;

  public events_array = [
                  {event1:'Top Computer Vision Conferences 2022',
                  event2:'Top General Machine Learning Conferences',
                  event3:'international conference on web engineering',
                  event4:'AAAI Conference on Artificial Intelligence' },
                 ]
  constructor() { }

   ngOnInit() {

  }


}
