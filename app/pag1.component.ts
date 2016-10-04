/**
 * Created by pedroferreira on 09/08/16.
 */
import { Component , ComponentFactoryResolver , ViewChild, ViewContainerRef} from '@angular/core';
import {Pag4Component} from './pag4.component';
import {NavigationService} from './navigation.service';

@Component({
    selector: 'my-select',
    templateUrl: 'app/pag1.component.html',

})
export class Pag1Component {
	ActiveStack:string = "inicial";
	@ViewChild('newpages',{read :ViewContainerRef}) newpages : ViewContainerRef;
	constructor(private compomentFactoryResolver : ComponentFactoryResolver , private navigationservice : NavigationService){
		navigationservice.ActiveStack = this.ActiveStack;
	}

	onclicked()
	{
		let newpageCompomentFactory   = this.compomentFactoryResolver.resolveComponentFactory(Pag4Component);
		let newpagedialogCompomentRef = this.newpages.createComponent(newpageCompomentFactory);
		this.navigationservice.addback(newpagedialogCompomentRef.instance.active);
		this.navigationservice.ActiveStack = newpagedialogCompomentRef.instance.active;
		newpagedialogCompomentRef.instance.close.subscribe(()=>{
		newpagedialogCompomentRef.destroy();
		this.navigationservice.ActiveStack = this.navigationservice.back[newpagedialogCompomentRef.instance.active];
		})
	}

esconder()
	{
	return this.navigationservice.isHidden(this.ActiveStack);
	}



}
