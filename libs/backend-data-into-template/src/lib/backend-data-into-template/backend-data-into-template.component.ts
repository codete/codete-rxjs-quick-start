import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Author, Book } from '@codete-rxjs/api-interfaces';
import { combineLatestWith, delay, filter, map, share, tap } from 'rxjs';

@Component({
  selector: 'app-backend-data-into-template',
  templateUrl: './backend-data-into-template.component.html',
  styleUrls: ['./backend-data-into-template.component.css']
})
export class BackendDataIntoTemplateComponent implements OnInit {

  constructor(private http: HttpClient) { }

  authors$ = this.http.get<Author[]>('/api/authors').pipe(
    share()
  )

  books$ = this.http.get<Book[]>('/api/books').pipe(
    delay(1000)
  );

  authorsWithAtLeastOneBook$ = this.authors$.pipe(
    filter( f => true ),
    map(authors => {
      return authors.filter(({ books }) => books.length >= 2)
    })
  );

  ngOnInit() {
  }

}
