import { Component, OnDestroy } from "@angular/core";
import {
  ControlValueAccessor,
  FormGroup,
  ValidationErrors,
  Validator,
} from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "pw-form-control-base",
  template: "",
})
export class BaseFormValueAccessorComponent
  implements ControlValueAccessor, OnDestroy, Validator
{
  private readonly _unsubscribeAll: Subject<boolean> = new Subject();

  public formGroup!: FormGroup<any>;

  public onTouched: () => void = () => {};

  public writeValue(val: unknown): void {
    val && this.formGroup.patchValue(val as any, { emitEvent: true });
  }

  public registerOnChange(fn: () => void): void {
    this.formGroup.valueChanges
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(fn);
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formGroup.disable() : this.formGroup.enable();
  }

  public validate(): ValidationErrors | null {
    return this.formGroup.valid
      ? null
      : {
          invalidForm: {
            valid: false,
            message: "Form fields are invalid",
          },
        };
  }

  public ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
  }
}
