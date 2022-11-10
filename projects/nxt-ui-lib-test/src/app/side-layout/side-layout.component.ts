import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { navbarData } from './nav-data';
import {DialogPosition, MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';


@Component({
  selector: 'app-side-layout',
  templateUrl: './side-layout.component.html',
  styleUrls: ['./side-layout.component.scss'],
  
})
export class SideLayoutComponent implements OnInit {

//test data

  navData = navbarData;
collapsed = false;
toggleCollapse(): void {
  this.collapsed = !this.collapsed;
  // this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
}




@ViewChild(MatSidenav)
 sidenav!: MatSidenav;
 opened: boolean=true;
 showToggle: string = "true"
 mode: any ="side"
 openSidenav:boolean = true;
 side_list: any;
 showLabels:boolean = true;
 menuType:any = "dashboard"
 menuName = ""
 enteredButton = false;
isMatMenuOpen = false;
prevButtonTrigger:any; 
showExpandBtn = false;
currentIndex:number = 0;

menuList: any;
hover:boolean = false;
hoverIndex!:number 


animal!: string;
name!: string;
 @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | undefined;
  constructor(public router: Router, private observer: BreakpointObserver, private http: HttpClient, private ren: Renderer2,public dialog: MatDialog) {
  
  }
  //@ts-ignore
  @ViewChild('templateRefName', {read: ElementRef}) el:ElementRef
  //@ts-ignore
  @ViewChild('assetsbutton', { read: MatMenuTrigger, static: false}) assetsbutton: MatMenuTrigger;
  //@ts-ignore
  @ViewChild('agentsbutton', { read: MatMenuTrigger, static: false}) agentsbutton: MatMenuTrigger;
  ngOnInit(): void {
   this.getSideNavJSON()
  }
  @HostListener('window:scroll', ['event'])
  onWindowScroll(event:any) {
    let scrollPosition = window.pageYOffset;
      if (event.target.scrollTop > 1.5) {
      this.ren.setStyle(this.el.nativeElement, 'background', 'white');
      this.ren.setStyle(this.el.nativeElement, 'box-shadow', '0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)');
       }else{
        this.ren.setStyle(this.el.nativeElement, 'background', 'none');
        this.ren.setStyle(this.el.nativeElement, 'box-shadow', 'none');
       }
  }

  ngAfterContentInit() {
    this.observer.observe(['(max-width: 1024px)']).subscribe((res) => {
      if (res?.matches) {
        this.sidenav.mode = 'side';
        this.sidenav.close();
        this.showLabels = false;
      } else {
         this.sidenav.mode = 'side';
        this.sidenav.open();
        this.showLabels = true;
      }
    });
  }
  toggle(){
    // console.log('this.openSidenav',this.openSidenav);
    if(this.openSidenav) {
      this.openSidenav=false;
      this.showLabels = false;
      this.showExpandBtn = false;
    }
    else {
      this.showLabels = true;
      this.openSidenav=true;
    }
  }

  onListItemClick(){
    console.log("on Click")
    this.collapsed = !this.collapsed;
  }
  public getSideNavJSON() {
    return this.http
      .get('assets/sideNavList.json')
      .subscribe((res) => (this.menuList = res));
  }

  openMyMenu(menuType:any) {
    this.menuType = menuType
    //@ts-ignore
    this.trigger.toArray()[1].openMenu();
  } 
  closeMyMenu() {
     //@ts-ignore
    this.trigger.closeMenu();
    console.log('close')
  }   
  buttonEnter(trigger:any, btnType:any) {
console.log("show labels", this.showLabels, trigger,btnType)
    if(!this.showLabels){
      console.log("test for dialog")
      setTimeout(() => {
        if(this.prevButtonTrigger && this.prevButtonTrigger != trigger){
          this.prevButtonTrigger.closeMenu();
          this.prevButtonTrigger = trigger;
          this.isMatMenuOpen = false;
          
          trigger.openMenu();
          this.ren.removeClass(trigger['_element'].nativeElement, 'cdk-focused');
          this.ren.removeClass(trigger['_element'].nativeElement, 'cdk-program-focused');
        }
        else if (!this.isMatMenuOpen) {
          this.enteredButton = true;
          this.prevButtonTrigger = trigger
          trigger.openMenu();
          this.ren.removeClass(trigger['_element'].nativeElement, 'cdk-focused');
          this.ren.removeClass(trigger['_element'].nativeElement, 'cdk-program-focused');
        }
        else {
          this.enteredButton = true;
          this.prevButtonTrigger = trigger
        }
      },100)
      
    }
   
  }

  buttonLeave(trigger:any, button:any) {
    // console.log("button", button)
    if(!this.showLabels){
      setTimeout(() => {
        if (this.enteredButton && !this.isMatMenuOpen) {
          trigger.closeMenu();
          this.ren.removeClass(button['_element'].nativeElement, 'cdk-focused');
          this.ren.removeClass(button['_element'].nativeElement, 'cdk-program-focused');
        } if (!this.isMatMenuOpen) {
          trigger.closeMenu();
          this.ren.removeClass(button['_element'].nativeElement, 'cdk-focused');
          this.ren.removeClass(button['_element'].nativeElement, 'cdk-program-focused');
        } else {
          this.enteredButton = false;
        }
      }, 80)
  }
}

showExpand(){
   setTimeout(()=>{this.showExpandBtn = true;}, 100)
  // this.showExpandBtn = true;
}

hideExpand(){
   setTimeout(()=>{this.showExpandBtn = false;}, 100)
  // this.showExpandBtn = false;
}
parentItemHover(res:boolean, i:any){
  console.log("test", i)
  this.hover = res
  this.hoverIndex = i;
  // setTimeout(()=>{this.trigger?.openMenu()}, 100)
}

parentItemHoverLeave(res:boolean, i:any){
  console.log("test", i)
  this.hover = res
  this.hoverIndex = i;
  setTimeout(()=>{this.trigger?.closeMenu()}, 100)
}
getMarginBottom(ind:any, data:any){
 console.log(data.children.length ,ind+1, 'index')
  if(data.children.length === ind+1){
    console.log("data",data, ind)
    return '0px'
  }else {
    return '8px'
  }
  
}
storeIndexFun(ind:any){
  this.currentIndex  = ind;
}
openDialog(event:any): void {
  console.log(event.clientX);
    console.log(event.clientY);

    let po: DialogPosition = { left: (event.clientX - 375) + 'px', top: (event.clientY + 20) + 'px'};
  const dialogRef = this.dialog.open(NotificationDialogComponent, {
    width: '250px',
    data: {name: this.name, animal: this.animal},
    position: po,
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.animal = result;
  });
}
navigatePage(route:any){
  console.log("route", route)
  this.router.navigate([route])
}
onItemSelected(submenu:any){
  console.log("route", submenu)
  this.router.navigate([submenu.route])
}
}

