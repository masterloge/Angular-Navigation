import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
//Directives
import {Pag1Component} from './pag1.component';
import {Pag2Component} from './pag2.component';
import {Pag3Component} from './pag3.component';
import {Pag4Component} from './pag4.component';

//Service
import {NavigationService} from './navigation.service';

@NgModule({
  imports: [ BrowserModule],       // module dependencies
  declarations: [ AppComponent , Pag1Component , Pag2Component, Pag3Component, Pag4Component],   // components and directives
  bootstrap: [ AppComponent ],     // root component
  entryComponents: [Pag4Component],
  providers: [NavigationService]                    // services
})
export class AppModule { }