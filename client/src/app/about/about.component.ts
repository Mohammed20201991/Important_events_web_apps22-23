import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public auther_items = [];
  public name ="Al-Hitawi Mohammed";
  public neptun_id ="nnnnn";
  public email_address = "mohamedabid092@gmail.com";
  public gitHub_link = "https://github.com/Mohammed20201991"
  constructor() { }

  ngOnInit(): void {
  }

}
