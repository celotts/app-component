import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPadreComponent } from './pagina-padre.component';

describe('PaginaPadreComponent', () => {
  let component: PaginaPadreComponent;
  let fixture: ComponentFixture<PaginaPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
