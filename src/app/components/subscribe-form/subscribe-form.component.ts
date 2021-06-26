import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css'],
})
export class SubscribeFormComponent implements OnInit {
  // inputTitle = new FormControl('first value')
  subscribeForm: FormGroup;
  firstName: AbstractControl;
  lastName: AbstractControl;
  age: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  passwordReapeted: AbstractControl;
  terms: AbstractControl;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subscribeForm = this.fb.group(
      {
        firstName: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          this.mosheValidator,
        ]),
        lastName: ['', [Validators.required]],
        age: [0, [Validators.required, Validators.min(12), Validators.email]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required, this.passwordValidator]],
        passwordReapeted: ['', [Validators.required]],
        terms: [new FormControl(false), [Validators.requiredTrue]],
      },
      {
        validators: [this.passwordReapetedValidator],
      }
    );

    this.firstName = this.subscribeForm.get('firstName');
    this.lastName = this.subscribeForm.get('lastName');
    this.age = this.subscribeForm.get('age');
    this.email = this.subscribeForm.get('email');
    this.password = this.subscribeForm.get('password');
    this.passwordReapeted = this.subscribeForm.get('passwordReapeted');
    this.terms = this.subscribeForm.get('terms');
  }

  invalidFirstNameMessage() {
    const errors = this.firstName.errors;
    if (errors?.required) {
      return 'You must enter your first name.';
    }
    if (errors?.minlength) {
      return 'First name must be at least 4 characters.';
    }
    if (errors?.nameMoshe) {
      return 'First name cannot be moshe';
    }
  }

  invalidAgeMessage() {
    const errors = this.age.errors;
    if (errors?.required) {
      return 'You must enter you age.';
    }
    if (errors?.min) {
      return 'You must be at least 12 years old.';
    }
  }

  invalidPasswordMessage() {
    const errors = this.password.errors;
    if (errors?.required) {
      return 'You must enter a password';
    }
    if (errors?.passwordWhiteSpace) {
      return 'Password cant contain spaces';
    }
    if (errors?.passwordNumberChar) {
      return 'Password must contin numbers';
    }
  }
  invalidPasswordRepeatedMessage() {
    if (this.passwordReapeted.errors?.required) {
      return 'You must reapet the password';
    }
    if (this.subscribeForm.errors?.passwordnoreapeted) {
      return 'Your passwords must match';
    }
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const invalid = control.value;
    if (invalid.indexOf(' ') !== -1) {
      return { passwordWhiteSpace: control.value };
    }
    if (!invalid.match(/\d+/g)) {
      return { passwordNumberChar: control.value };
    } else {
      return null;
    }
  }

  mosheValidator(control: AbstractControl): ValidationErrors | null {
    const invalid = control.value.trim().toLowerCase() === 'moshe';
    return invalid ? { nameMoshe: control.value } : null;
  }

  passwordReapetedValidator(control: FormGroup): ValidationErrors | null {
    const password = control.get('password').value;
    const passwordReapeted = control.get('passwordReapeted').value;
    return password !== passwordReapeted ? { passwordnoreapeted: true } : null;
  }

  onSubmitSubscribeForm() {
    console.log(this.subscribeForm.get('lastName').value);
  }
}
