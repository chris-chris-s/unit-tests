import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTeaserComponent } from './products-teaser.component';

describe('ProductsTeaserComponent', () => {
  let component: ProductsTeaserComponent;
  let fixture: ComponentFixture<ProductsTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsTeaserComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsTeaserComponent);
    component = fixture.componentInstance;
    component.product = {
      productName: 'Something',
      description: 'lorem ipsum',
      productLink: 'example.com',
      productPrice: 123,
      id: 'p1',
      product: {},
      image: {},
      inStock: true,
      productAverageStars: 3,
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
