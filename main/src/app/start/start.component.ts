//#region @browser
import { Component, OnInit } from '@angular/core';
import { Topic } from '@codete-rxjs-quick-start/shared';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  topics: Topic[] = [
    {
      title: 'Using http client to get <b>backend data</b> straight <b>into</b> angular <b>template</b>.',
      imageLink: '/main/src/assets/backend-data-into-template.jpeg',
      link: '/backend-data-into-template'
    },
    {
      title: 'Getting <b>list of ids</b>/hashes at being just  <b>to</b> get list of <b>full models</b> later',
      imageLink: '/main/src/assets/backend-data-into-template.jpeg',
      link: '/list-of-ids-to-full-models'
    },
    {
      title: 'Handling <b>search results</b> and social <b>posts interactions</b> in rxjs',
      imageLink: '/main/src/assets/backend-data-into-template.jpeg',
      link: '/search-results-posts-interactions'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
//#endregion
