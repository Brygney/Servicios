import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionProductosComponent } from './presentacion-productos.component';

describe('PresentacionProductosComponent', () => {
  let component: PresentacionProductosComponent;
  let fixture: ComponentFixture<PresentacionProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentacionProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
