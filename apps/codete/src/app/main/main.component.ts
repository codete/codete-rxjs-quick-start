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
      title: 'RXJS: using with http client to get <b>backend data</b> straight <b>into</b> angular <b>template</b>',
      subtitle: 'async pipe in angular template vs .pipe() function for rxjs operators',
      imageLink: '/assets/backend-data-into-template.jpeg',
      link: '/backend-data-into-template'
    },
    {
      title: 'Rxjs playing with “hot” and “cold” observables',
      imageLink: '/assets/backend-data-into-template.jpeg',
      link: '/'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
