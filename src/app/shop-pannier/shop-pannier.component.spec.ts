import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopPannierComponent } from './shop-pannier.component';

describe('ShopPannierComponent', () => {
  let component: ShopPannierComponent;
  let fixture: ComponentFixture<ShopPannierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopPannierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPannierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
