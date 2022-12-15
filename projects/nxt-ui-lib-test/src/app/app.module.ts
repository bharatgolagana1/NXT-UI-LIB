import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SideLayoutComponent } from './side-layout/side-layout.component';
import { SideLayoutV2Component } from './side-layout-v2/side-layout-v2.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { MatMenuComponent } from './mat-menu/mat-menu.component';
import { RighMenuToolbarComponent } from './righ-menu-toolbar/righ-menu-toolbar.component';
import { WebformLayoutComponent } from './webform-layout/webform-layout.component';
import { NotificationDialogComponent } from './notification-dialog/notification-dialog.component';
import { HeaderRightMenuComponent } from './header-right-menu/header-right-menu.component';
import { TitleComponent } from './title/title.component';
import { SettingsComponent } from './settings/settings.component';
import { CommonInputComponent } from './common-input/common-input.component';
import { CommonButtonComponent } from './common-button/common-button.component';
import { UsercardComponent } from './usercard/usercard.component';
import { RouterModule } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { CommonTableComponent } from './common-table/common-table.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { formatDate } from '@angular/common';
import { DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter } from '@angular/material/core';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { KeycloakPagesComponent } from './keycloak-pages/keycloak-pages.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { InfoModalComponent } from './info-modal/info-modal.component';
 
 export const PICK_FORMATS = {
   parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
   display: {
       dateInput: 'input',
       monthYearLabel: {year: 'numeric', month: 'short'},
       dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
       monthYearA11yLabel: {year: 'numeric', month: 'long'}
   }
 };
 
 class PickDateAdapter extends NativeDateAdapter {
   override format(date: Date, displayFormat: Object): string {
       if (displayFormat === 'input') {
           return formatDate(date,'dd-MMM-yyyy',this.locale);
          // return formatDate(date,'dd MMM yyyy',this.locale);
          // return formatDate(date,'dd/MMM/yyyy',this.locale);
       } else {
           return date.toDateString();
       }
   }
 }


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainLayoutComponent,
    SideLayoutComponent,
    SideLayoutV2Component,
    SidenavListComponent,
    MatMenuComponent,
    RighMenuToolbarComponent,
    WebformLayoutComponent,
    NotificationDialogComponent,
    HeaderRightMenuComponent,
    TitleComponent,
    SettingsComponent,
    CommonInputComponent,
    CommonButtonComponent,
    UsercardComponent,
    GeneralComponent,
    CommonTableComponent,
    FileUploadComponent,
    KeycloakPagesComponent,
    LayoutsComponent,
    InfoModalComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule, 
    RouterModule,
    NgxMatTimepickerModule,
    CurrencyMaskModule,
    MatInputModule,
    MatChipsModule,
 
  ],
  providers: [
    {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
