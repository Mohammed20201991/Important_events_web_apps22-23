import { Component, Input, OnInit,OnChanges} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Event } from '../event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  @Input() event = new Event();
  public eventForm = this.fb.group({
    // default values for this data structer
    title: [''],
    note: [''],
    location: [''],
    DateOfEvent:[''],
  });

  // create getter function
  get title() { return this.eventForm.get('title'); }
  get note() { return this.eventForm.get('note'); }
  get location() { return this.eventForm.get('location'); }
  get DateOfEvent() { return this.eventForm.get('DateOfEvent'); }

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.eventForm.patchValue(this.event);
  }
}
