import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from "@angular/core";
import { BooleanInput } from "@angular/cdk/coercion";
import { Router } from "@angular/router";
import { IdentityManager } from "@core/auth/identity-manager.service";
@Component({
  selector: "user",
  templateUrl: "./user.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: "user",
})
export class UserComponent {
  public constructor(
    private readonly _router: Router,
    private readonly _identityManager: IdentityManager
  ) {}

  public static ngAcceptInputType_showAvatar: BooleanInput;

  @Input() public showAvatar = true;

  @Input() public showTooltip = false;

  @Input() public wrapperClass?: string;

  @Output() public onOptionClicked = new EventEmitter<unknown>();

  public signOut = (): void => {
    this._identityManager.signOut();
    this.onOptionClicked.emit();
    this._router.navigateByUrl("/");
  };
}
