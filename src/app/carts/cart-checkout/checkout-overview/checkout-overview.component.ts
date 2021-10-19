import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { CheckoutData } from 'src/app/services/checkout';
import { Product } from 'src/app/services/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-overview',
  templateUrl: './checkout-overview.component.html',
  styleUrls: ['./checkout-overview.component.sass'],
})
export class CheckoutOverviewComponent implements OnInit {
  checkoutData = new CheckoutData();
  productList: Product[] = [];

  constructor(private checkoutService: CheckoutService, public cartService: CartService) {}

  ngOnInit(): void {
    this.checkoutService.getCheckoutdata();
    this.checkoutData = this.checkoutService.getCheckoutdata();
    this.productList = this.cartService.getProductList();
  }
}
