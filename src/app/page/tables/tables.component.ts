import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  tables = [
    {code:'T001', seat: 2, description: 'Near to kitchen'},
    {code:'T002', seat: 3, description: 'Near to cachier'},
    {code:'T003', seat: 4, description: 'Near to entrance'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
