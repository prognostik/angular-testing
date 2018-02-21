import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TotalService {

	private data = 2;

  	constructor() { }

  	getData(): Observable<any> {
  		return of(this.data);
	}

}
