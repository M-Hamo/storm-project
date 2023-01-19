import { Component, Injector, Input, ViewChild } from "@angular/core";
import {
  AbstractControl,
  ControlContainer,
  ControlValueAccessor,
  FormControl,
  FormControlDirective,
} from "@angular/forms";

@Component({
  selector: "app-control-base",
  template: "",
})
export class BaseValueAccessorComponent implements ControlValueAccessor {
  public constructor(protected readonly injector: Injector) {}

  @ViewChild(FormControlDirective, { static: true })
  public formControlDirective!: FormControlDirective | any;

  @Input()
  public formControl!: FormControl;

  @Input()
  public formControlName!: string;

  public get control(): AbstractControl {
    return (
      this.formControl ||
      this.controlContainer.control?.get(this.formControlName)
    );
  }

  public get controlContainer(): ControlContainer {
    return this.injector.get(ControlContainer);
  }

  public registerOnTouched(fn: () => void): void {
    if (this.formControlDirective) {
      this.formControlDirective.valueAccessor?.registerOnTouched(fn);
    }
  }

  public registerOnChange(fn: () => void): void {
    if (this.formControlDirective) {
      this.formControlDirective.valueAccessor?.registerOnChange(fn);
    }
  }

  public writeValue(obj: number | string): void {
    if (this.formControlDirective) {
      this.formControlDirective.valueAccessor?.writeValue(obj);
    }
  }

  public setDisabledState(isDisabled: boolean): void {
    if (this.formControlDirective) {
      this.formControlDirective.valueAccessor?.setDisabledState(isDisabled);
    }
  }
}
