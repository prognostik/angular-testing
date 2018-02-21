import { Component, OnInit } from '@angular/core';
import { TotalService } from './total.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent implements OnInit {

	private total: number;

	constructor(
		private totalService: TotalService
	) { }

	ngOnInit() {
		this.getData();
	}

	private getData() {
 		this.totalService
 			.getData()
      		.subscribe((data) => {
      			this.total = data;
      		});
	}
}
