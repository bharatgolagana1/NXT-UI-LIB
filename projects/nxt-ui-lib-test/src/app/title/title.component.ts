import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  
  @Input() title:string = 'Settings';
  @Input() showEdit:boolean = true;
  @Input() showRight:boolean = true;
  @Input() showSubtitle:boolean = true;
  @Input() showSearch:boolean = true;
  @Input() name:any
  constructor() { }

  ngOnInit(): void {
  }

}
