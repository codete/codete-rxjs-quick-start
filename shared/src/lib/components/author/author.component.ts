//#region @browser
import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
  providers: [AuthorService]
})
export class AuthorComponent implements OnInit {

  constructor(
    protected service: AuthorService
  ) { }

  ngOnInit() {
  }

}
//#endregion