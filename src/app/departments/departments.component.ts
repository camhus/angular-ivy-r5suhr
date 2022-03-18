import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
})
export class DepartmentsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  count: string;
  loadDepartments() {
    this.http
      .get<Object[]>('https://geo.api.gouv.fr/departements')
      .subscribe((data) => {
        let i = 0;
        for (let dept of data) {
          /*let dept = new Department(
            data[i].nom,
            data[i].code,
            data[i].codeRegion
          );*/

          console.log(dept);
        }
      });
  }

  ngOnInit() {
    this.loadDepartments();
  }
}
