import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SideToggleService {
  private readonly _toggled: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  public readonly toggled$: Observable<boolean> = this._toggled.asObservable();

  public toggle = (): void => this._toggled.next(!this._toggled.value);

  public open = (): void => this._toggled.next(true);

  public close = (): void => this._toggled.next(false);
}
