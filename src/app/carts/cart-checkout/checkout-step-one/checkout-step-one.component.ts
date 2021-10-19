import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout-step-one',
  templateUrl: './checkout-step-one.component.html',
  styleUrls: ['./checkout-step-one.component.sass'],
})
export class CheckoutStepOneComponent implements OnInit {
  customerForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private checkoutService: CheckoutService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });
  }

  save(): void {
    if (this.customerForm.valid) {
      if (this.customerForm.dirty) {
        const data = this.customerForm.value;

        this.checkoutService.savePersonalData(
          this.customerForm.get('firstName').value,
          this.customerForm.get('lastName').value,
          this.customerForm.get('email').value,
          this.customerForm.get('address').value
        );
        this.router.navigate(['/cart/checkout', 'payment']);

        console.log('Saved: ' + JSON.stringify(this.customerForm.get('firstName').value));
      } else {
        this.customerForm.reset();
      }
    } else {
      this.errorMessage = 'Please correct all validation errors.';
    }
  }
}
