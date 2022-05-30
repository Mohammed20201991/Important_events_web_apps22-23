import { Component, OnInit } from '@angular/core';
// import { Event } from '@angular/router';
import { Event } from '../event';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  public events : Event[]= [
    { id: 1, title: 'event1', note: 'note1', location: 'location1', DateOfEvent: 'EVENT1' },
    { id: 2, title: 'event2', note: 'note2', location: 'location2', DateOfEvent: 'EVENT2' },
    { id: 3, title: 'event3', note: 'note3', location: 'location3', DateOfEvent: 'EVENT3' },
    { id: 4, title: 'event4', note: 'note4', location: 'location4', DateOfEvent: 'EVENT4' },
    { id: 5, title: 'event5', note: 'note5', location: 'location5', DateOfEvent: 'EVENT5' },
    { id: 6, title: 'event6', note: 'note6', location: 'location6', DateOfEvent: 'EVENT6' },
  ];
  public DateOfEvent = 'ALL';
  public filteredEvents: Event[] = [];
  public selectedEvent:Event | null = null;
  constructor() { }

  ngOnInit(): void {
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
}
