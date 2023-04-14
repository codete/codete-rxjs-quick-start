//#region @browser
import { Component, Input, OnInit } from '@angular/core';
import { Hamster } from './hamster';

@Component({
  selector: 'app-hamster',
  templateUrl: './hamster.component.html',
  styleUrls: ['./hamster.component.scss'],
})
export class HamsterComponent implements OnInit {
  @Input() hamster?: Hamster;

  ngOnInit() {
  }

}
//#endregion
