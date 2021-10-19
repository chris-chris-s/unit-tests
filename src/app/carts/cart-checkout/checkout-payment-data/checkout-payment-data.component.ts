import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { CheckoutService } from 'src/app/services/checkout.service';

function validateIban(control: AbstractControl): { [key: string]: boolean } | null {
  let iban = control.value as string;

  if (!iban || !iban.match('[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}')) {
    return { regex: true };
  }

  return null;
}

@Component({
  selector: 'app-checkout-payment-data',
  templateUrl: './checkout-payment-data.component.html',
  styleUrls: ['./checkout-payment-data.component.sass'],
})
export class CheckoutPaymentDataComponent implements OnInit {
  paymentForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private fb: FormBuilder, private checkoutService: CheckoutService) {}

  onNext(): void {
    this.router.navigate(['/cart', 'checkoutOverview']);
  }

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      accountOwner: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
      iban: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(32), validateIban]],
      bic: ['', [Validators.required]],
    });
  }

  save(): void {
    if (this.paymentForm.valid) {
      if (this.paymentForm.dirty) {
        this.checkoutService.savePaymentData(
          this.paymentForm.get('accountOwner').value,
          this.paymentForm.get('iban').value,
          this.paymentForm.get('bic').value
        );

        console.log('Saved: ' + JSON.stringify(this.paymentForm.get('accountOwner').value));
        //route anpassen
        this.router.navigate(['/cart/checkout', 'overview']);
      } else {
        this.paymentForm.reset();
      }
    } else {
      this.errorMessage = 'Please correct all validation errors.';
    }
  }
}
