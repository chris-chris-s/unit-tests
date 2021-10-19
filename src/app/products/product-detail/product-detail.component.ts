import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/services/product.interface';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  productId = '';
  productDetail: Product;
  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productId = this.activeRoute.snapshot.params.id;
    this.activeRoute.params.subscribe(params => {
      this.productId = params.id;
    });
    this.productsService.GetProduct(this.productId).subscribe(product => {
      this.productDetail = product;
    });
  }
  onBack() {
    this.router.navigate(['/']);
  }
  onCheckout() {
    this.cartService.addToCart(this.productDetail);
  }
}
