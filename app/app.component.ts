/**
 * Created by pedroferreira on 09/08/16.
 */
import {Component } from '@angular/core';

import {Pag1Component} from './pag1.component';
import {Pag2Component} from './pag2.component';
import {Pag3Component} from './pag3.component';


@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
	<nav>
    <a href="#/a" (click)="clicked(content1)">A</a>
    <a href="#/b" (click)="clicked(content2)">B</a>
    <a href="#/c" (click)="clicked(content3)">C</a>

	</nav>
  <hr>
  <my-select  [hidden]="activo(content1)"></my-select>
  <my-select2 [hidden]="activo(content2)"></my-select2>
  <my-select3 [hidden]="activo(content3)"></my-select3>`,

})

export class AppComponent {
  title = 'Test';
  locat = '' ;
  content1 = 1;
  content2 = 2;
  content3 = 3;

  clicked(value:string)
  {
    this.locat=value;
  }

  activo(value:string)
  {
    if(value == this.locat)
    {
     return false;
    }
    return true;
  }
}