import { 
	async, 
	ComponentFixture, 
	TestBed 
} from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { TotalComponent } from './total.component';
import { TotalService } from './total.service';

describe('TotalComponent', () => {
	let component: TotalComponent;
	let fixture: ComponentFixture<TotalComponent>;
	let totalService: TotalService;
	let spy;
  	let de: DebugElement;
  	let el: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ TotalComponent ],
			providers: [ TotalService ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TotalComponent);
		component = fixture.componentInstance;
		//fixture.detectChanges();

  		// TwainService actually injected into the component
  		totalService = fixture.debugElement.injector.get(TotalService);

  		// Setup spy on the `getQuote` method
  		spy = spyOn(totalService, 'getData')
        	.and.returnValue(of(1000));

		// Get the Twain quote element by CSS selector (e.g., by class name)
		de = fixture.debugElement.query(By.css('.total'));
		el = de.nativeElement;
	});

	/**
	 * Create component
	 */

	it('should create component', () => {
		expect(component).toBeTruthy();
		//expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
	});

	/**
	 * 
	 */
	it('should change contents', async(() => {
		fixture.detectChanges();

		fixture.whenStable().then(() => { // wait for async getQuote
			fixture.detectChanges();        // update view with quote
			expect(el.textContent).toContain("1000");
		});
	}));
});
