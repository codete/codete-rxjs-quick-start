import { Component, Input, OnInit } from '@angular/core';
import { Hamster } from '@codete-rxjs/api-interfaces';

@Component({
  selector: 'app-hamster',
  templateUrl: './hamster.component.html',
  styleUrls: ['./hamster.component.scss']
})
export class HamsterComponent implements OnInit {

  @Input() hamster?: Hamster;
  constructor() { }

  ngOnInit() {
  }

}
