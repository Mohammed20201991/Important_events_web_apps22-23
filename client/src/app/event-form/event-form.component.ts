import { Component, Input, OnInit,OnChanges, Output, EventEmitter} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Event } from '../event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css'],
})
export class EventFormComponent implements OnInit {
  @Input() event = new Event();
  @Output() save = new EventEmitter<Event>();
  public eventForm = this.fb.group({
    // default values for this data structure
    title: ['',[Validators.required]],
    note: ['',[Validators.required]],
    location: ['',[Validators.required, Validators.pattern(/^BGH\d+/)]],
    // location: ['',[Validators.required]],
    DateOfEvent:['',[Validators.required]],
  });

  // create getter function
  get title() {
    return this.eventForm.get('title')!; }

  get note() {
    return this.eventForm.get('note')!; }

  get location() {
    return this.eventForm.get('location')!; }

  get DateOfEvent() {
    return this.eventForm.get('DateOfEvent')!; }

  constructor(
    private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.eventForm.patchValue(this.event);
  }

  handleSubmit(){
    if (this.eventForm.valid) {
      this.save.emit(this.eventForm.value);
      // Object.assign(this.event,this.eventForm.value);
    }
  }

  // handleSave(event: Event){
  //   console.log(event);

  // }
}
