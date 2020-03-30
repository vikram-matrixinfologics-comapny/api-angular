import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
{path:'signup',component:SignupComponent},
{path:'login',component:FormComponent},
{path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
