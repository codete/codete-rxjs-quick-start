//#region @browser
import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  providers: [BookService]
})
export class BookComponent implements OnInit {

  constructor(
    protected service: BookService
  ) { }

  ngOnInit() {
  }

}
//#endregion