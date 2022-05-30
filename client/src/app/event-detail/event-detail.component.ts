import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event = new Event();
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    // read url
    const urlId = this.route.snapshot.paramMap.get('id');
    console.log(urlId);
    console.log(typeof urlId);
    if (urlId) {
      const id = parseInt(urlId);  //convert string to integer
      const event = this.eventService.getEvent(id);
      //  if not null
      if (event) {
        this.event = event;
      }
    }

  }

  handleDelete(){
    this.eventService.deleteEvent(this.event.id);
    this.router.navigate(['/events']);   // navigate back
  }

}
