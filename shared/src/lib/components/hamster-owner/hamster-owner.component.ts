//#region @browser
import { Component, OnInit } from '@angular/core';
import { HamsterOwnerService } from './hamster-owner.service';

@Component({
  selector: 'app-hamster-owner',
  templateUrl: './hamster-owner.component.html',
  styleUrls: ['./hamster-owner.component.scss'],
  providers: [HamsterOwnerService]
})
export class HamsterOwnerComponent implements OnInit {

  constructor(
    protected service: HamsterOwnerService
  ) { }

  ngOnInit() {
  }

}
//#endregion