import { Direction } from "@angular/cdk/bidi";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ButtonTypes } from "src/app/shared/utils/button-properties";
import { IButtonBar } from "../../../utils/button-bar";

@Component({
  selector: "app-button-bar",
  templateUrl: "./button-bar.component.html",
})
export class ButtonBarComponent {
  public readonly ButtonTypes = ButtonTypes.rounded;

  @Output() public readonly onChangeTab = new EventEmitter();

  @Input() public buttonList?: IButtonBar[];

  @Input() public selectedTab?: string | number;

  @Input() public dir: Direction = "ltr";
}
