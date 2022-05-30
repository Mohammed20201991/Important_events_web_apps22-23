import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.css']
})
export class EventFilterComponent implements OnInit {
  @Input() DateOfEvent = 'EVENT1';
  @Output() DateOfEventChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  handleDateOfEventChange(){
this.DateOfEventChange.emit(this.DateOfEvent);
  }
}
