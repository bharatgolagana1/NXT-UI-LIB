import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nxt-ui-lib-test';
  onClick(e:any){
    console.log("On Click", e)
  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
