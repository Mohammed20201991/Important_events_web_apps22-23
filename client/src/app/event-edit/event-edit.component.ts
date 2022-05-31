import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  event = new Event();
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location,
    private router: Router
    ) { }

  async ngOnInit() {
    // read url
    const urlId = this.route.snapshot.paramMap.get('id');
    console.log(urlId);
    console.log(typeof urlId);
    if (urlId) {
      const id = parseInt(urlId);  //convert string to integer
      const event = await this.eventService.getEvent(id);
      //  if not null
      if (event) {
        this.event = event;
      }
    }
}
async handleSave(event: Event) {
// console.log(event);
// Object.assign(this.event, event); // we do not need in this way we want to crate method for this

  if (this.event.id) {
    await this.eventService.updateEvent(this.event.id, event);  //this.event
    this.location.back();
  } else {
    await this.eventService.addEvent(event);
    this.router.navigate(['/events']);
  }
}
}
