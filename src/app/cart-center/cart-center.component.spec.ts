import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartCenterComponent } from './cart-center.component';

describe('CartComponent', () => {
  let component: CartCenterComponent;
  let fixture: ComponentFixture<CartCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
