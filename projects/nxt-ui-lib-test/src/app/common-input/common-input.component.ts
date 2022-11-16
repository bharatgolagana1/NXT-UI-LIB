import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { NgxMatTimepickerComponent } from 'ngx-mat-timepicker';
import * as moment from 'moment';

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
  multipleControl = new FormControl('');
  multipleGroup = [{
    name: 'Assets',
    assets: [
      {value: 'allAssets', viewValue: 'All Assets'},
      {value: 'activeAssets', viewValue: 'Active Assets'},
      {value: 'inactiveAssets', viewValue: 'Inactive Assets'},
    ],
  },
  {
    name: 'Cases',
    assets: [
      {value: 'allCases', viewValue: 'All Cases'},
      {value: 'activeCases', viewValue: 'Active Cases'},
      {value: 'inactiveCases', viewValue: 'Inactive Cases'},
    ],
  },]
  selectedObjectsFromArray:any = []
  selected:any = 'steak-0'
  startDate = new FormControl(new Date());
  currencyInput = new FormControl('');
  currencyInput2 = new FormControl('5000')
  currencyInput3 = new FormControl('')
  currencyInput4 = new FormControl({value: '', disabled: true})
  currencyInput5 = new FormControl({value: '2300', disabled: false});
  mandatoryTextarea = new FormControl('',[Validators.required] );
  defaultTime = new FormControl('')
  defaultTimeMandatory = new FormControl('',[Validators.required])
  defaultTimeDisabled = new FormControl({value: '', disabled: true});
  VisitorsCurrentDate:any = new FormControl('',)
  // @ViewChild(NgxMatTimepickerComponent, { static: true }) public picker?: MatDatepicker<Date>;
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
startDateRequired= new FormControl('', [Validators.required]);
date22= new FormControl(new Date(), );
firstName = new FormControl('', [Validators.required])

getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'You must enter a value';
  }

  return this.email.hasError('email') ? 'Not a valid email' : '';
}
public setDateTiming(date:any){
  console.log("date", date)
  this.VisitorsCurrentDate.patchValue([moment(date, "dd-MMM-yyyy").format("MMM YYYY")], {onlySelf: true});
  console.log("updated", this.VisitorsCurrentDate,moment(date, "dd-MMM-yyyy").format("MMM YYYY"))
}

}
