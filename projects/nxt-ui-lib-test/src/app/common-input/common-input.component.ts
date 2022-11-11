import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-input',
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.scss'
  ]
})
export class CommonInputComponent implements OnInit {

  foods = [
    {value: 'case', viewValue: 'Case'},
    {value: 'workOrder', viewValue: 'Work Order'},
    {value: 'report', viewValue: 'Reports'},
  ];
  selectedObjectsFromArray:any = []
  selected:any = 'steak-0'
  constructor(public router:Router) { }

  ngOnInit(): void {
    this.selectedObjectsFromArray = ['case', 'workOrder']
  }
ngAfterViewInit() {

  }
 


handleCardClick(){
console.log("On Navigate to asseto plans page")
}

title = 'Card View Demo';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }




email = new FormControl('', [Validators.required, Validators.email]);
firstName = new FormControl('', [Validators.required])

getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'You must enter a value';
  }

  return this.email.hasError('email') ? 'Not a valid email' : '';
}
}
