import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OpenDialogService {
  public readonly _createAdminModal = new Subject<unknown>();

  public readonly _createVendorModal = new Subject<unknown>();

  public readonly createAdminModal$: Observable<unknown> =
    this._createAdminModal.asObservable();

  public readonly createVendorModal$: Observable<unknown> =
    this._createVendorModal.asObservable();
}
