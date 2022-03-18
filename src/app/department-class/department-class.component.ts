import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-class',
  templateUrl: './department-class.component.html',
  styleUrls: ['./department-class.component.css'],
})
export class Department {
  nom: string;
  code: number;
  codeRegion: number;

  constructor(n: string, c: number, cr: number) {}
}
