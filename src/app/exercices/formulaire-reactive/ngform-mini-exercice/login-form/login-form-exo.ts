import { Component, NgModule, OnDestroy, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login-form-exo',
  styleUrl: './login-form-exo.css',
  templateUrl: './login-form-exo.html',
})
export class LoginForm implements OnDestroy {

  protected email = signal<string>('');
  protected password = signal<string>('');

  protected displayErrorMessage = signal<boolean>(false);
  protected errorMessage = signal<string>('');
  private timeoutId: number = 0;

  protected handleOnSubmit() {

    this.errorMessage.set("My error");
    this.displayErrorMessage.set(true);

    this.timeoutId = setTimeout(() => {this.displayErrorMessage.set(false)}, 5000);
  }

  public ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }
}
