import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Event } from './event';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
     Accept: 'XMLHttpRequest',
  })
};
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
  private eventsUrl = 'http://localhost:8000/api/events';
  constructor(private http: HttpClient) {}

  async getEvents(){
    return await lastValueFrom(this.http.get<Event[]>(this.eventsUrl));
    }

  async getEvent(id: number) {
    return await lastValueFrom(this.http.get<Event>(`${this.eventsUrl}/${id}`));
  }

  async updateEvent(id: number, modifiedEvent: Event) {
    return await lastValueFrom(this.http.patch<Event>(`${this.eventsUrl}/${id}`, modifiedEvent, httpOptions));
      }
  async addEvent(newEvent: Event) {
    return await lastValueFrom(this.http.post<Event>(this.eventsUrl, newEvent, httpOptions));
  }

  //  it is not required in our task but I see it will be nice to have
  // compete CRUD
  // async deleteEvent(id: number) {
  //   return await lastValueFrom(this.http.delete<null>(`${this.eventsUrl}/${id}`, httpOptions));
  // }
}
