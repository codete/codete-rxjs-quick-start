//#region @browser
import { Component, Input, OnInit } from '@angular/core';
import { Hamster } from './hamster';
import { HamsterService } from './hamster.service';

@Component({
  selector: 'app-hamster',
  templateUrl: './hamster.component.html',
  styleUrls: ['./hamster.component.scss'],
  providers: [HamsterService]
})
export class HamsterComponent implements OnInit {
  @Input() hamster?: Hamster;
  constructor(
    protected service: HamsterService
  ) { }

  ngOnInit() {
  }

}
//#endregion
