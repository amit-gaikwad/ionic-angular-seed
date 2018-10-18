import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  employees = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://reqres.in/api/unknown').subscribe((response: any) => {
      this.employees = response.data;
    });
  }
}
