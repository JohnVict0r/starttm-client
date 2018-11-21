import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  
  flag: boolean = false;
  showCreateEvent(){
    this.flag = !this.flag;
  }
}
