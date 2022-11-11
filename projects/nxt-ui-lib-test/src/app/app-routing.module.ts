import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonButtonComponent } from './common-button/common-button.component';
import { CommonInputComponent } from './common-input/common-input.component';
import { CommonTableComponent } from './common-table/common-table.component';
import { GeneralComponent } from './general/general.component';
import { SettingsComponent } from './settings/settings.component';
import { SideLayoutComponent } from './side-layout/side-layout.component';
import { UsercardComponent } from './usercard/usercard.component';

const routes: Routes = [
  { path: '', redirectTo: 'input', pathMatch: 'full' },
  { path: 'main', component: SettingsComponent},
  { path: 'input', component: CommonInputComponent},
  { path: 'button', component: CommonButtonComponent},
  { path: 'usercard', component:  UsercardComponent},
  { path: 'settings', component:  SettingsComponent},
  { path: 'general', component:  GeneralComponent},
  { path: 'table', component:  CommonTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
