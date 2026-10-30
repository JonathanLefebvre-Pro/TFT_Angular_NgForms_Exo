import { Component, computed, inject } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-command-validator',
  styleUrl: './command-validator.css',
  templateUrl: './command-validator.html',
})
export class CommandValidator {

  protected formBuilder = inject(NonNullableFormBuilder);

  protected form = this.formBuilder.group({
      client: ['', [Validators.required]],
      products: this.formBuilder.array([this.createProductFormGroup()]) 
  });

  protected get products() {
    return this.form.controls.products;
  }

  protected readonly totalPrice = computed(() => {
    return this.products.controls.reduce((prev, current) => 
      prev + (current.controls.quantity.value * current.controls.unitPrice.value), 0)
  });

  protected createProductFormGroup() {
    return this.formBuilder.group({
      product: ['', [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(1)]],
      unitPrice: [0, [Validators.required, Validators.min(0)]]
    })
  }

  protected addProduct() {
    this.products.push(this.createProductFormGroup());
  }

  protected removeProduct(productId: number) {
    this.products.removeAt(productId);
  }

  protected handleOnSubmit()  {
    if(this.form.valid)
      console.log(this.form.value);
    else
      console.debug("Form is not valid !");
  }
}
