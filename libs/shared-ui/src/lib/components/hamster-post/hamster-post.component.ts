import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hamster } from '@codete-rxjs/api-interfaces';

@Component({
  selector: 'app-hamster-post',
  templateUrl: './hamster-post.component.html',
  styleUrls: ['./hamster-post.component.scss']
})
export class HamsterPostComponent implements OnInit {

  @Input() hamster?: Hamster;
  @Input() loveLevel: number = 0;
  @Input() applyingLove: boolean = false;
  @Output() loveButton = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
