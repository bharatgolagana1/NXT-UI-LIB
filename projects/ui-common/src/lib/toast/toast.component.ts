import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nxt-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  successMsg = " Success Message"
  alertMsg = "Alert Message"
  warningMsg = "Warning Message"
  primaryMsg = "Info Message"

  @Input()
  message?:any = ''; // This is the string the template is already bound to  
   // This is what toggles the component to show or hide  ﻿

  @Input()
  alertype? = 'primary';

  @Input()
  showstoast?:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  public get classes(): string[] {
    const mode = this.alertype;

    return ['toast-class', `${mode}-toast`, `${this.message?.length > 0 ? 'toast-info' : ''}` ];
  }
  public getMessage():any{
    if(this.alertype === 'success'){
      return this.successMsg
    }
    if(this.alertype === 'warning'){
      return this.warningMsg
  }
  if(this.alertype === 'alert'){
    return this.alertMsg
}
if(this.alertype === 'primary'){
  return this.primaryMsg
}
}
}
