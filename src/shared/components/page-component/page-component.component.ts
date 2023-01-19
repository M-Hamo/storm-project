import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { NavigationService } from "src/app/core/services/navigation.service";
import { SideToggleService } from "../../services/side-toggle.service";
import { ButtonTypes } from "../../utils/button-properties";

@Component({
  selector: "app-page-component",
  templateUrl: "./page-component.component.html",
  styleUrls: ["./page-component.component.scss"],
})
export class PageComponentComponent {
  public constructor(
    private readonly _navigation: NavigationService,
    private readonly _sideToggleService: SideToggleService,
    private readonly _route: ActivatedRoute
  ) {}

  @Input() public readonly pageTitle!: string;

  public title$: Observable<string | undefined> = this._route.title;

  public readonly ButtonTypes = ButtonTypes;

  public get hasHistory(): boolean {
    return this._navigation.hasHistory;
  }

  public onToggleSide = (): void => this._sideToggleService.toggle();
}
