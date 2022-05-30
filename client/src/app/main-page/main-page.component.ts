import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public title = "My Very Beast Event Tracker API";
  public number_of_events = 6;
  public img_url = ""
  constructor() { }

  ngOnInit(): void {
  }

}
