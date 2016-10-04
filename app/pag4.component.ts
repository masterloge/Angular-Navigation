import { Component, EventEmitter, ComponentFactoryResolver , ViewChild, ViewContainerRef} from '@angular/core';
import {NavigationService} from './navigation.service';

@Component({
    selector: 'my-select4',
    template: `
    <div [hidden]="esconder()">
    {{active}}
    <button (click)="onClickedExit()"> Back </button>
	<br>
	<input type="text" name="">
	<br>
	<button (click)="onclicked()">Clica2</button>
	</div>
	<div #newpages></div>`
})

export class Pag4Component {
	close = new EventEmitter();
	@ViewChild('newpages',{read :ViewContainerRef}) newpages : ViewContainerRef;
	num=0;
	constructor(private compomentFactoryResolver : ComponentFactoryResolver , private navigationservice : NavigationService){
		this.num = this.navigationservice.id + 1;
		this.navigationservice.id = this.num;

	}
	active= "a"+ this.navigationservice.id ;

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

	onClickedExit(){	
		this.close.emit('event');	
	}
	
	esconder(){
		return this.navigationservice.isHidden(this.active);
	}
}
