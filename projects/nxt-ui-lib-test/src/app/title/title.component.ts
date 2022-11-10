import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  
  @Input() title:string = 'Settings';
  @Input() showEdit:boolean =false;
  @Input() showRight:boolean = false;
  @Input() showSubtitle:boolean = false;
  @Input() showSearch:boolean = false;
  @Input() name:any
  constructor() { }

  ngOnInit(): void {
  }

}
