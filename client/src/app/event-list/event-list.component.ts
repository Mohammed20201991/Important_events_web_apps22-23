import { Component, OnInit } from '@angular/core';
// import { Event } from '@angular/router';
import { Event } from '../event';
import { EventService } from '../event.service';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public events:Event[]= [];
  public DateOfEvent = 'ALL';
  public filteredEvents: Event[] = [];
  public selectedEvent:Event | null = null;
  constructor(private eventService: EventService ) { }

  ngOnInit(): void {
    this.events = this.eventService.getEvents(); //I will load events from event service
    this.filterEvent();
  }

  private filterEvent(){
    this.filteredEvents =
    this.DateOfEvent === 'ALL' ? this.events:
    this.events.filter((event) => event.DateOfEvent === this.DateOfEvent);
  }

  handleDateOfEventChange(newDateOfEvent:string){
    console.log(newDateOfEvent);
    this.DateOfEvent = newDateOfEvent;
    this.filterEvent();
  }

  handleSave(event: Event) {
    // console.log(event);
    Object.assign(this.selectedEvent, event);
    this.selectedEvent = null;
  }
}
