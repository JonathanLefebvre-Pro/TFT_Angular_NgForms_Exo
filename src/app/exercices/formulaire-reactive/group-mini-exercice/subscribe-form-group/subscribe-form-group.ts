import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, JsonPipe],
  selector: 'app-subscribe-form-group',
  styleUrl: './subscribe-form-group.css',
  templateUrl: './subscribe-form-group.html',
})
export class SubscribeFormGroup {

  protected formBuilder = inject(NonNullableFormBuilder);

  protected firstnameController = ['', [Validators.required]];
  protected lastnameController = ['', [Validators.required]];
  protected emailController = ['', [Validators.required, Validators.email]];
  protected ageController = ['', [Validators.required, Validators.min(18)]];

  protected streetController = [''];
  protected cityController = ['', [Validators.required]];
  protected zipcodeController = ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]];

  protected form = this.formBuilder.group({
      firstname: this.firstnameController,
      lastname: this.lastnameController,
      email: this.emailController,
      age: this.ageController,

      address: this.formBuilder.group({
        street: this.streetController,
        city: this.cityController,
        zipcode: this.zipcodeController
      })
    }
  );

  protected onSubmit() {
    if(this.form.valid)
      console.log(this.form.value);
    else
      console.log("Form not valid !");
  }
  protected fillFirstnameAndCity() {
    this.form.controls.firstname.setValue("Jonathan");
    this.form.controls.address.controls.city.setValue("New York");
  }
}
