import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { InfoModalComponent } from '../info-modal/info-modal.component';
import { ModalPopupService } from '../info-modal/modalPopup.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.scss']
})
export class LayoutsComponent implements OnInit {
  scrollViewDevId:string = ''
  //@ts-ignore
  dialogRef: MatDialogRef<any>;
  imgProfileSrc:any = ''
  imageProfileName:any = ''
  imgProfileRemove:any
  constructor(private modalPopupService: ModalPopupService, public _d: DomSanitizer) { }

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

//   scroll(element:any) {
//     window.scrollTo(element.yPosition)
// }

scroll(el: string) {
  // this.defaultPosInfo = true;
  this.scrollViewDevId=el;
  //@ts-ignore
  document.getElementById(el).scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest"
  });
}

openInfoDialog(){
  this.dialogRef = this.modalPopupService.openPopup<InfoModalComponent>(InfoModalComponent, { panelClass: 'custom-dialog-container' });
  this.dialogRef.afterClosed().subscribe(result => {
    console.log(result);
  });
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
}
