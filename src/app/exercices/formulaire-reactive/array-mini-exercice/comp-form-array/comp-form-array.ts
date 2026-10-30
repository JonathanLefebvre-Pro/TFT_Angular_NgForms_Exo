import { Component, inject } from '@angular/core';
import { FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-comp-form-array',
  styleUrl: './comp-form-array.css',
  templateUrl: './comp-form-array.html',
})
export class CompFormArray {
  protected formBuilder = inject(NonNullableFormBuilder);
  protected form = this.formBuilder.group({
    name: ['', [Validators.required]],
    skills: this.formBuilder.array([this.createSkillFormControl()])
  });

  protected get skillInputs() {
    return this.form.controls.skills;
  }

  protected createSkillFormControl() {
    return new FormControl('', [Validators.required]);
  }

  protected addSkillInput() {
    this.skillInputs.push(this.createSkillFormControl());
  }

  protected removeSkillInput(inputId: number) {
    if(inputId < 1)
      return;

    this.skillInputs.removeAt(inputId);
    this.skillInputs.markAsDirty();
  }

  protected handleOnSubmit(){
    if(this.form.valid)
      console.log(this.form.value);
    else
      console.debug("Form is not valid !");
  }
}
