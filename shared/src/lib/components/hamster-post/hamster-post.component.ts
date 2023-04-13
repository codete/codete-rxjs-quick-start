import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HamsterPost } from './hamster-post';

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
