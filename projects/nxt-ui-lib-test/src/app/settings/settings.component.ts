import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {

 
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

handleCardClick(){
console.log("On Navigate to asseto plans page")
}

title = 'Card View Demo';



}
