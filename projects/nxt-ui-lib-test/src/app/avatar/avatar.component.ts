import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input()
  src?: string = "../../assets/images/defaultAvtar.svg"
  
  @Input()
  size:any;

  @Input()
  type = '';

  constructor() {}

  ngOnInit() {
    console.log('hi', this.src,this.src?.toString().includes('defaultAvtar'));
    if((this.src?.toString().includes('defaultAvtar'))){
      this.size = 24;
    }else{
      this.size = 100;
    }
  }
}
