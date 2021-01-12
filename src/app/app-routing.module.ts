import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { LandingPageComponent } from './primary/landingPage/landing-page.component';
import { HomeComponent } from './primary/home/home.component';
import { ProfileComponent } from './main-page/profile/profile.component';
import { AboutComponent } from './main-page/about/about.component';
import { InterestsComponent } from './main-page/interests/interests.component';
import { StackComponent } from './main-page/stack/stack.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'stack', component: StackComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
