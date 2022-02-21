import { Component, OnInit } from '@angular/core';
import { Topic } from '@codete-rxjs/api-interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  topics: Topic[] = [
    {
      title: 'Using with http client to get <b>backend data</b> straight <b>into</b> angular <b>template</b>.',
      subtitle: 'asdasync pipe in angular template vs .pipe() function for rxjs operators',
      imageLink: '/assets/backend-data-into-template.jpeg',
      link: '/backend-data-into-template'
    },
    {
      title: 'Playing with “hot” and “cold” observables',
      subtitle: 'Subject, BehavioralSubject and rxjs operators fromEvent, timer, interval',
      imageLink: '/assets/backend-data-into-template.jpeg',
      link: '/'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
