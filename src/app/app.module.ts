import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import { MainPageComponent } from './main-page/main-page.component';
import { HomeComponent } from './primary/home/home.component';
import { ScrollsComponent } from './demo/scrolls/scrolls.component';

import { ProfileComponent } from './main-page/profile/profile.component';
import { StackComponent } from './main-page/stack/stack.component';
import { AboutComponent } from './main-page/about/about.component';
import { InterestsComponent } from './main-page/interests/interests.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { GalleryComponent } from './primary/gallery/gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HomeComponent,
    ScrollsComponent,
    ProfileComponent,
    StackComponent,
    AboutComponent,
    InterestsComponent,
    FooterComponent,
    ErrorComponent,
    GalleryComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    //Material
    
    //primeNg
   // TabMenuModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
