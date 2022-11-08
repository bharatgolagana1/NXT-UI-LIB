import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-righ-menu-toolbar',
  templateUrl: './righ-menu-toolbar.component.html',
  styleUrls: ['./righ-menu-toolbar.component.scss']
})
export class RighMenuToolbarComponent implements OnInit {
@Input() showLabels:any;
  constructor() { }

  ngOnInit(): void {
  }
menu = [ {
  
  'children':[
  {
    "displayName": "Logout",
    "iconName": "",
    "route": "e-permit/visit-log",
    "children": []
  },
]
}]
}
