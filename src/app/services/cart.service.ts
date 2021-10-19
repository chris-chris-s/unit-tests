import { Product } from './product.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private productList: Product[] = [];

  addToCartEvent: Subject<Product> = new Subject<Product>();
  addToCart(product: Product) {
    this.productList.push(product);
    this.addToCartEvent.next(product);
  }

  getProductList() {
    return this.productList.slice();
  }

  constructor() {}
}
