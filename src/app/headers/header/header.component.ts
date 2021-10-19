import { Component, OnInit, Input } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() hasBack: boolean;
  showMenu = false;
  elements = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.addToCartEvent.subscribe(product => {
      this.elements = this.cartService.getProductList().length;
    });
    this.elements = this.cartService.getProductList().length;

    if (this.router.url === '/') {
      this.hasBack = true;
    } else {
      this.hasBack = false;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  back() {
    window.history.back();
  }
}
