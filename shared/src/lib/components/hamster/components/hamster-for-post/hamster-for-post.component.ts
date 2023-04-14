//#region @browser
import { Component, Input, OnInit } from '@angular/core';
import { HamsterComponent } from '../../hamster.component';

@Component({
  selector: 'app-hamster-for-post',
  templateUrl: './hamster-for-post.component.html',
  styleUrls: ['./hamster-for-post.component.scss']
})
export class HamsterComponentForPost extends HamsterComponent implements OnInit {

}
//#endregion
