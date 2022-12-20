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
  size = 128;

  @Input()
  type = '';

  constructor() {}

  ngOnInit() {
    console.log('hi', this.src);
  }
}
