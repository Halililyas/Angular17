import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAdd2Component } from './products-add-2.component';

describe('ProductsAdd2Component', () => {
  let component: ProductsAdd2Component;
  let fixture: ComponentFixture<ProductsAdd2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsAdd2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsAdd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
