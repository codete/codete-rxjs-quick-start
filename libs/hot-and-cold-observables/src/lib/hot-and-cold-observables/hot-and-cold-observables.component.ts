import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-and-cold-observables',
  templateUrl: './hot-and-cold-observables.component.html',
  styleUrls: ['./hot-and-cold-observables.component.scss']
})
export class HotAndColdObservablesComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) { }



  ngOnInit() {
  }

}
