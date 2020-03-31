import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { AfterLoginGuard } from './gaurds/after-login.guard';
import { BeforeLoginGuard } from './gaurds/before-login.guard';

const routes: Routes = [
{path:'signup',component:SignupComponent,canActivate:[BeforeLoginGuard]},
{path:'login',component:FormComponent,canActivate:[BeforeLoginGuard]},
{path:'profile',component:ProfileComponent,canActivate:[AfterLoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
