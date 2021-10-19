import { CartContainerComponent } from './carts/cartcontainer.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CartOverviewComponent } from './carts/cart-overview/cart-overview.component';
import { CartCheckoutComponent } from './carts/cart-checkout/cart-checkout.component';
import { CheckoutStepOneComponent } from './carts/cart-checkout/checkout-step-one/checkout-step-one.component';
import { CheckoutPaymentDataComponent } from './carts/cart-checkout/checkout-payment-data/checkout-payment-data.component';
import { CheckoutOverviewComponent } from './carts/cart-checkout/checkout-overview/checkout-overview.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, pathMatch: 'full' },
  { path: 'product/:id', component: ProductDetailComponent },
  {
    path: 'cart',
    component: CartContainerComponent,
    children: [
      { path: 'checkoutOverview', component: CartOverviewComponent, pathMatch: 'full' },
      {
        path: 'checkout',
        component: CartCheckoutComponent,
        children: [
          { path: 'stepOne', component: CheckoutStepOneComponent },
          { path: 'payment', component: CheckoutPaymentDataComponent },
          { path: 'overview', component: CheckoutOverviewComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
