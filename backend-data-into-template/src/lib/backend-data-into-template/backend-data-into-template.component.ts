//#region @browser
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Author, Book, host, IAuthor } from '@codete-rxjs-quick-start/shared';
import { combineLatestWith, delay, filter, map, Observable, share, tap } from 'rxjs';
import { Helpers } from 'tnp-core';

@Component({
  selector: 'app-backend-data-into-template',
  templateUrl: './backend-data-into-template.component.html',
  styleUrls: ['./backend-data-into-template.component.scss']
})
export class BackendDataIntoTemplateComponent implements OnInit {
  authors$ = this.http.get<Author[]>(`${host}/api/authors`).pipe(
    share()
  );

  authorsWithAtLeastOneBook$: Observable<IAuthor[]>;

  books$ = this.http.get<Book[]>(`${host}/api/books`).pipe(
    delay(1000)
  );

  constructor(private http: HttpClient) {
    //#region @websql
    this.authors$ = Author.ctrl.getAuhtors().received.observable.pipe(
      map(r => r.body.rawJson),
      share(),
    );
    this.books$ = Book.ctrl.getBooks().received.observable.pipe(
      map(r => r.body.rawJson),
      delay(1000)
    );
    //#endregion


    this.authorsWithAtLeastOneBook$ = this.authors$.pipe(
      map(authors => {
        return authors.filter(({ books }) => books.length >= 2)
      }),
      tap(console.log)
    );
  }

  ngOnInit() {
  }

}
//#endregion
