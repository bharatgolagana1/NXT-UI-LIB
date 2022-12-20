import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { NgxMatTimepickerComponent } from 'ngx-mat-timepicker';
import * as moment from 'moment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-common-input',
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.scss'
  ]
})
export class CommonInputComponent implements OnInit {

  foods = [
    {value: 'case', viewValue: 'Case', count:'180'},
    {value: 'workOrder', viewValue: 'Work Order',count:'70'},
    {value: 'report', viewValue: 'Reports', count:'66'},
  ];
  multipleControl = new FormControl('');
  checkboxMultipleCount = new FormControl('');
  multipleGroup = [{
    name: 'Assets',
    assets: [
      {value: 'allAssets', viewValue: 'All Assets', count:'120'},
      {value: 'activeAssets', viewValue: 'Active Assets', count:'40'},
      {value: 'inactiveAssets', viewValue: 'Inactive Assets', count:'540'},
    ],
  },
  {
    name: 'Cases',
    assets: [
      {value: 'allCases', viewValue: 'All Cases',count:'120'},
      {value: 'activeCases', viewValue: 'Active Cases',count:'670'},
      {value: 'inactiveCases', viewValue: 'Inactive Cases',count:'20'},
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
  agentImage:any = new FormControl('')
  imgSrc:any = ''
  imageName:any = ''
  imgProfileSrc:any = ''
  imageProfileName:any = ''
  imgRemove:any
  imgProfileRemove:any
  // @ViewChild(NgxMatTimepickerComponent, { static: true }) public picker?: MatDatepicker<Date>;
  constructor(public router:Router, public _d: DomSanitizer) { }

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
onCheckboxChange(data:any){
  console.log('data', data)
}


onSelectImage(e: any) {
  const self = this;
  const file = e.srcElement.files[0];
  this.imageName = e.srcElement.files[0];
  // this.imageName = file;
  var mimeType = file.type;
  this.imgRemove = 'true'
  if (mimeType.match(/image\/*/) == null) {
    window.alert('Only Images are allowed');
    //	this._snackBar.open(this.i18NextService.t('messages.other.onlyImage'), '', { duration: 3000, panelClass: ["show-warning-message"] });
    e.target.value = '';
  } else {
    this.imgSrc = window.URL.createObjectURL(file);
    // const file = e.srcElement.files[0]; 
    this.imgSrc = window.URL.createObjectURL(file); 
    // let b64Str: string;
    // let reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = function (e) {
    //   //@ts-ignore
    //   b64Str = reader.result.toString();
    //   //@ts-ignore
    //   self.getBase64(b64Str);
    // };
  }
}

onSelectProfileImage(e: any) {
  const self = this;
  const file = e.srcElement.files[0];
  this.imageProfileName = e.srcElement.files[0];
  // this.imageName = file;
  var mimeType = file.type;
  this.imgProfileRemove = 'true'
  if (mimeType.match(/image\/*/) == null) {
    window.alert('Only Images are allowed');
    //	this._snackBar.open(this.i18NextService.t('messages.other.onlyImage'), '', { duration: 3000, panelClass: ["show-warning-message"] });
    e.target.value = '';
  } else {
    this.imgProfileSrc = window.URL.createObjectURL(file);
    // const file = e.srcElement.files[0]; 
    this.imgProfileSrc = window.URL.createObjectURL(file); 
    // let b64Str: string;
    // let reader = new FileReader();
    // reader.readAsDataURL(file);
    // reader.onload = function (e) {
    //   //@ts-ignore
    //   b64Str = reader.result.toString();
    //   //@ts-ignore
    //   self.getBase64(b64Str);
    // };
  }
}

removeProfileImage(){
  this.imgProfileSrc = "";
  this.imageProfileName = "";
}
removeImage() {
  this.imgSrc = "";
  this.imageName = "";
}
}

