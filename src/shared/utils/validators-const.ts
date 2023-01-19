import { FormGroup, AbstractControl, ValidationErrors } from "@angular/forms";

export const PhoneNumber = {
  Pattern: `^01[0-2,5]{1}[0-9]{8}$`,
  MinLength: 5,
  MaxLength: 24,
};

export const Password = {
  MinLength: 8,
  MaxLength: 100,
};

export const matchValidator =
  (
    controlName: string,
    matchingControlName: string,
    errorName = "isMatch"
  ): ValidationErrors | null =>
  (formGroup: FormGroup) => {
    const control = formGroup.get(controlName) as AbstractControl;
    const matchingControl = formGroup.get(
      matchingControlName
    ) as AbstractControl;

    if (matchingControl?.errors && !matchingControl?.errors?.confirmedValidator)
      return null;

    if (control.value !== matchingControl.value)
      matchingControl.setErrors({ [errorName]: true });
    else matchingControl.setErrors(null);

    return null;
  };
