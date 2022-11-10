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
    RouterModule  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
