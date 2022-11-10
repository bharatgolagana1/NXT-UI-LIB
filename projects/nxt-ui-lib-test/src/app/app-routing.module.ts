import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonButtonComponent } from './common-button/common-button.component';
import { CommonInputComponent } from './common-input/common-input.component';
import { SettingsComponent } from './settings/settings.component';
import { SideLayoutComponent } from './side-layout/side-layout.component';
import { UsercardComponent } from './usercard/usercard.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: SettingsComponent},
  { path: 'input', component: CommonInputComponent},
  { path: 'button', component: CommonButtonComponent},
  { path: 'usercard', component:  UsercardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
