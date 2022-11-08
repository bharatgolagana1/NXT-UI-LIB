import { NgModule } from '@angular/core';
import { UiCommonComponent } from './ui-common.component';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DetailsLayoutComponent } from './details-layout/details-layout.component';
import { ToastComponent } from './toast/toast.component';
import { CommonInputComponent } from './common-input/common-input.component';



@NgModule({
  declarations: [
    UiCommonComponent,
    DefaultButtonComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    DetailsLayoutComponent,
    ToastComponent,
    CommonInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UiCommonComponent,
    DefaultButtonComponent,
    HeaderComponent,
    FooterComponent,
    ToastComponent
  ]
})
export class UiCommonModule { }
