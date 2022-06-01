import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public auther_items = [
    { id: 1, name: 'Al-Hitawi Mohammed', neptun_id: 'P622VN', email_address: 'mohamedabid092@gmail.com' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
