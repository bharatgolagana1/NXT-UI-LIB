import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  foods = [
    {value: 'case', viewValue: 'Case', count:'180'},
    {value: 'workOrder', viewValue: 'Work Order',count:'70'},
    {value: 'report', viewValue: 'Reports', count:'66'},
  ];
}
