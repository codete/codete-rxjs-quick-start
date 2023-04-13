import { Component, OnInit } from '@angular/core';
import { Topic } from '@codete-rxjs-quick-start/shared';

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
      title: 'Getting <b>list of ids</b>/hashes at being just  <b>to</b> get list of <b>full models</b> later',
      imageLink: '/assets/backend-data-into-template.jpeg',
      link: '/list-of-ids-to-full-models'
    },
    {
      title: 'Handling <b>search results</b> and social <b>posts interactions</b> in rxjs',
      imageLink: '/assets/backend-data-into-template.jpeg',
      link: '/search-results-posts-interactions'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
