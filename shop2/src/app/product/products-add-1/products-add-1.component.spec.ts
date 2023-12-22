import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAdd1Component } from './products-add-1.component';

describe('ProductsAdd1Component', () => {
  let component: ProductsAdd1Component;
  let fixture: ComponentFixture<ProductsAdd1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsAdd1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsAdd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
