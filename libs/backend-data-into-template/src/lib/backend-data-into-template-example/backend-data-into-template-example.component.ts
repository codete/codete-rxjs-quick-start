import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Author } from '@codete-rxjs/api-interfaces';

@Component({
  selector: 'app-backend-data-into-template-example',
  templateUrl: './backend-data-into-template-example.component.html',
  styleUrls: ['./backend-data-into-template-example.component.scss']
})
export class BackendDataIntoTemplateExampleComponent implements OnInit {

  constructor(private http: HttpClient) { }

  usersArray$ = this.http.get<Author[]>('/authors')

  bestAuthorObject$ = this.http.get<Author>('/bestauthor')


  ngOnInit() {
  }

}
