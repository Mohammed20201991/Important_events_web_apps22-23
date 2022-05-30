import { Injectable } from '@angular/core';
import { Event } from './event';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events : Event[]= [
    { id: 1, title: 'event1', note: 'note1', location: 'location1', DateOfEvent: 'EVENT1' },
    { id: 2, title: 'event2', note: 'note2', location: 'location2', DateOfEvent: 'EVENT2' },
    { id: 3, title: 'event3', note: 'note3', location: 'location3', DateOfEvent: 'EVENT3' },
    { id: 4, title: 'event4', note: 'note4', location: 'location4', DateOfEvent: 'EVENT4' },
    { id: 5, title: 'event5', note: 'note5', location: 'location5', DateOfEvent: 'EVENT5' },
    { id: 6, title: 'event6', note: 'note6', location: 'location6', DateOfEvent: 'EVENT6' },
  ];

  getEvents(){
    return this.events;
  }

  getEvent(id: number) {
    return this.events.find((event) => event.id === id);
  }

  updateEvent(id: number, modifiedEvent: Event) {
    const event = this.getEvent(id);
    Object.assign(event, modifiedEvent);
    return event;
  }

  addEvent(newEvent: Event) {
    const id = this.events.length + 1;
    newEvent.id = id;
    this.events.push(newEvent);
    return newEvent;
  }

  deleteEvent(id: number) {
    // const pos = this.events.findIndex((event) => event.id === id);
    // this.events.splice(pos, 1); // deleting
    this.events = this.events.filter((event) => event.id !== id);
  }
}
