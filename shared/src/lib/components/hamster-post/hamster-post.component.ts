//#region @browser
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HamsterPost } from './hamster-post';

// @ts-ignore
// import * as jsonHamste from '../../../assets/hamsters/test.json';
// console.log({ first: jsonHamste })


// @ts-ignore
// import * as jsonHamste2 from '/shared/src/assets/hamsters/test.json';
// console.log({ second: jsonHamste2 })

@Component({
  selector: 'app-hamster-post',
  templateUrl: './hamster-post.component.html',
  styleUrls: ['./hamster-post.component.scss']
})
export class HamsterPostComponent implements OnInit {

  @Input() hamster?: HamsterPost;
  @Input() loveLevel: number = 0;
  @Output() loveButton = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
//#endregion
