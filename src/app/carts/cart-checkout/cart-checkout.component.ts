import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-checkout',
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.sass'],
})
export class CartCheckoutComponent implements OnInit {
  constructor(private router: Router, public cartService: CartService) {}

  ngOnInit(): void {}
}
