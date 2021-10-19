import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductsTeaserComponent } from './products/products-teaser/products-teaser.component';
import { HeaderComponent } from './headers/header/header.component';
import { CartOverviewComponent } from './carts/cart-overview/cart-overview.component';
import { CartCheckoutComponent } from './carts/cart-checkout/cart-checkout.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductService } from './services/product.service';
import { CartContainerComponent } from './carts/cartcontainer.component';
import { CheckoutStepOneComponent } from './carts/cart-checkout/checkout-step-one/checkout-step-one.component';
import { CheckoutPaymentDataComponent } from './carts/cart-checkout/checkout-payment-data/checkout-payment-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutOverviewComponent } from './carts/cart-checkout/checkout-overview/checkout-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsTeaserComponent,
    HeaderComponent,
    CartOverviewComponent,
    CartCheckoutComponent,
    ProductDetailComponent,
    ProductsComponent,
    CartContainerComponent,
    CheckoutStepOneComponent,
    CheckoutPaymentDataComponent,
    CheckoutOverviewComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule],
  exports: [
    ProductsComponent,
    ProductsTeaserComponent,
    HeaderComponent,
    CartOverviewComponent,
    CartCheckoutComponent,
    ProductDetailComponent,
    CartContainerComponent,
  ],
  // imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  // exports: [ProductsComponent, ProductsTeaserComponent],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
