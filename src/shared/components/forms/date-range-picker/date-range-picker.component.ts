import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { FormBuilder, NG_VALIDATORS, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ButtonColors, ButtonTypes } from "@shared/utils/button-properties";
import { BaseFormValueAccessorComponent } from "../base-form-value-accessor/base-from-value-accessor";

@Component({
  selector:
    "app-date-range-picker[formControlName],app-date-range-picker[ngModel],app-date-range-picker[formControl]",
  templateUrl: "./date-range-picker.component.html",
  styleUrls: ["./date-range-picker.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateRangePickerComponent),
      multi: true,
    },
  ],
})
export class DateRangePickerComponent
  extends BaseFormValueAccessorComponent
  implements OnInit
{
  public constructor(
    private readonly _fb: FormBuilder,
    private readonly _cd: ChangeDetectorRef
  ) {
    super();
  }

  @Input() public maxDate?: number;

  @Input() public label?: string;

  @Output() public reset = new EventEmitter<unknown>();

  public readonly dateForm = {
    from: [null],
    to: [null],
  };

  public ButtonTypes = ButtonTypes;

  public ButtonColors = ButtonColors;

  public onReset(): void {
    this.reset.emit();
    this.formGroup.reset({});
    this._cd.detectChanges();
  }

  public ngOnInit(): void {
    this.formGroup = this._fb.group(this.dateForm);
  }
}
