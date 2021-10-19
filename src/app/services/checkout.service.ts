import { Injectable } from '@angular/core';
import { CheckoutData } from './checkout';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  checkoutData: CheckoutData;

  constructor() {
    this.checkoutData = new CheckoutData();
  }

  savePersonalData(firstName: string, lastName: string, email: string, address: string) {
    this.checkoutData.firstName = firstName;
    this.checkoutData.lastName = lastName;
    this.checkoutData.email = email;
    this.checkoutData.address = address;
  }

  savePaymentData(accountOwner: string, iban: string, bic: string) {
    this.checkoutData.accountOwner = accountOwner;
    this.checkoutData.iban = iban;
    this.checkoutData.bic = bic;
  }

  getCheckoutdata(): CheckoutData {
    return this.checkoutData;
  }
}
