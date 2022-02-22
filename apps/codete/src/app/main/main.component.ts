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
      title: 'Using http client to get <b>backend data</b> straight <b>into</b> angular <b>template</b>.',
      imageLink: '/assets/backend-data-into-template.jpeg',
      link: '/backend-data-into-template'
    },
    {
      title: 'Understanding <b>“hot and cold” observables</b>',
      imageLink: '/assets/backend-data-into-template.jpeg',
      link: '/hot-and-cold-observables'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
