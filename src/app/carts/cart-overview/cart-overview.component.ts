import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-overview',
  templateUrl: './cart-overview.component.html',
  styleUrls: ['./cart-overview.component.sass'],
})
export class CartOverviewComponent implements OnInit {
  constructor(private router: Router, public cartService: CartService) {}

  onCheckout() {
    this.router.navigate(['/cart/checkout', 'stepOne']);
  }

  ngOnInit(): void {}
}
