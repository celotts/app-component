import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaHijoComponent } from './pagina-hijo.component';

describe('PaginaHijaComponent', () => {
	let component: PaginaHijoComponent;
	let fixture: ComponentFixture<PaginaHijoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PaginaHijoComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PaginaHijoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
