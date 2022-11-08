import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mat-menu',
  templateUrl: './mat-menu.component.html',
  styleUrls: ['./mat-menu.component.scss']
})
export class MatMenuComponent implements OnInit {

  @Input() items!: any;
  @ViewChild('childMenu') public childMenu: any;

  constructor(public router: Router) {}
  
  ngOnInit() {}
}