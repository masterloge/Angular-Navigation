import { Injectable }    from '@angular/core';

@Injectable()
export class NavigationService {
	ActiveStack:string;
   	back = [];
   	id=1;
   isHidden(value:string)
	{
		if(value == this.ActiveStack)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	addback(value:string){
		this.back[value] = this.ActiveStack;
	}
}