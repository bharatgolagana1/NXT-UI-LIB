import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstName = new FormControl('', [Validators.required])
  foods = [
    {value: 'case', viewValue: 'Case', count:'180'},
    {value: 'workOrder', viewValue: 'Work Order',count:'70'},
    {value: 'report', viewValue: 'Reports', count:'66'},
  ];


  keywords = ['Petrochemical', 'Pneumatics System (85-BP)', ' Applied Electrical Control System (90-EC1-A) '];
  chipControl = new FormControl(['Petrochemical']);
  fruits = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];
  addOnBlur = true;
  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
}
