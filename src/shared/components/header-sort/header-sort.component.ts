import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "./../../shared.module";

export type SortAction = "asc" | "dec";

@Component({
  selector: "header-sort",
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: "./header-sort.component.html",
  styleUrls: ["./header-sort.component.scss"],
})
export class HeaderSortComponent {
  @Output() public readonly onSort = new EventEmitter<SortAction>();

  public actionType: SortAction | null = null;

  public sortHandler = () => {
    if (this.actionType === null) this.actionType = "dec";
    else {
      this.actionType = this.actionType === "dec" ? "asc" : "dec";
    }

    this.onSort.emit(this.actionType);
  };
}
