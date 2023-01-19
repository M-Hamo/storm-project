import { Direction } from "@angular/cdk/bidi";
import {
  Component,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";
import { MatSelect } from "@angular/material/select";
import { Observable, ReplaySubject } from "rxjs";
import { debounceTime, takeUntil, tap } from "rxjs/operators";
import { BidirectionallyService } from "src/app/core/services/bidirectionally.service";
import { SelectListOption } from "src/app/shared/helpers/select-list-option.model";
import { BaseValueAccessorComponent } from "../base-value-accessor/control-value-accessor-connector";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent
  extends BaseValueAccessorComponent
  implements OnInit, OnDestroy
{
  public constructor(
    protected readonly injector: Injector,
    private readonly _bidirectionallyService: BidirectionallyService,
    private readonly _fb: FormBuilder
  ) {
    super(injector);
  }

  private readonly _destroyAll$ = new ReplaySubject<unknown>(1);

  @ViewChild(MatSelect) public matSelect?: MatSelect;

  @Input() public label?: string;

  @Input() public noDataSearchPlaceHolder: string =
    "No data matches your search!";

  @Input() public appearance?: string = "outline";

  @Input() public searchAppearance?: string = "fill";

  @Input() public placeholder = "";

  @Input() public hint?: string;

  @Input() public errorMessage?: string;

  @Input() public options?: SelectListOption[];

  @Input() public bindValue: string = "id";

  @Input() public isMulti = false;

  @Input() public iconType?: string;

  @Input() public hasIcon = false;

  @Input() public iconEnum: unknown;

  @Input() public filterOptions: boolean = true;

  @Input() public filterFront: boolean = true;

  @Input() public searchDebounceTime: number = 500;

  @Input() public isLoading: boolean = false;

  @Input() public set disabled(disabled: boolean) {
    if (this.control) {
      disabled ? this.control.disable() : this.control.enable();
    }
  }

  @Output() onSearch: EventEmitter<unknown> = new EventEmitter();

  @Output() open: EventEmitter<unknown> = new EventEmitter();

  public readonly direction$: Observable<Direction> =
    this._bidirectionallyService.direction$;

  public searchControl: FormControl<unknown | null> = this._fb.control(null);

  public ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(this.searchDebounceTime),
        tap((val: unknown | null) => this.onSearch.emit(val)),
        takeUntil(this._destroyAll$)
      )
      .subscribe();
  }

  public compareWithObjects(object1: unknown, object2: unknown): boolean {
    return (object1 as any) && object2 && object1 === object2;
  }

  public resetSelect = (): void => {
    this.control.reset();
    this.searchControl.reset();
    this.matSelect?.close();
  };

  public ngOnDestroy(): void {
    this._destroyAll$.next(undefined);
    this._destroyAll$.complete();
  }
}
