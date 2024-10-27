import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchValidator(
  controlName: string,
  checkControlName: string
): ValidatorFn {
  return (controls: AbstractControl): ValidationErrors | null => {
    const control = controls.get(controlName);
    const checkControl = controls.get(checkControlName);

    if (checkControl?.errors && !checkControl.errors['matching']) {
      return null;
    }

    if (control?.value !== checkControl?.value) {
      checkControl?.setErrors({ matching: true });
      return { matching: true };
    } else {
      return null;
    }
  };
}

export function emailValidator(): ValidatorFn {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = emailRegex.test(control.value);
    return valid ? null : { 'invalidEmail': { value: control.value } };
  };
}
