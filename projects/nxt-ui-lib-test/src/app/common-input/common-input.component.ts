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

  
  constructor(public router:Router) { }

  ngOnInit(): void {
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




foods = [
  {value: 'steak-0', viewValue: 'Case'},
  {value: 'pizza-1', viewValue: 'Work Order'},
  {value: 'tacos-2', viewValue: 'Reports'},
];
email = new FormControl('', [Validators.required, Validators.email]);

getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'You must enter a value';
  }

  return this.email.hasError('email') ? 'Not a valid email' : '';
}
}
