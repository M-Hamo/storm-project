import { Directive, EventEmitter, Output, Self } from "@angular/core";
import { MatSelect } from "@angular/material/select";
import { ENTER, SPACE } from "@angular/cdk/keycodes";

@Directive({
  selector: "[no-space]",
})
export class NoSpaceDirective {
  constructor(@Self() private readonly _select: MatSelect) {
    this._select._handleKeydown = (event: KeyboardEvent) => {
      if (event.keyCode == SPACE) {
        const active = this._select.panelOpen
          ? this._select.options.filter((x) => x.active)[0] || null
          : null;
        this.spacekeydown.emit(active?.value ?? null);
      } else {
        if (!this._select.disabled) {
          this._select.panelOpen
            ? (this._select as any)._handleOpenKeydown(event)
            : (this._select as any)._handleClosedKeydown(event);
        }
      }
    };
  }

  @Output("spacekeydown") spacekeydown: EventEmitter<any> = new EventEmitter<any>();
}
