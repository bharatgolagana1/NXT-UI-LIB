import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  @Output() closeSideNav = new EventEmitter();
  logoPath: string = ''
  @Input() mainItem = ''
  @Input() allowedPageList = ''
  @Input() depth: number = 0
  expanded: boolean;

  constructor(public router: Router, public dialog: MatDialog) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
    this.expanded = false;
  }

  onToggleClose() {
    this.closeSideNav.emit();
  }

  ngOnInit() { }


}