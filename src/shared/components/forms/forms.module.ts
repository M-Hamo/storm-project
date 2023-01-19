import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectComponent } from "./select/select.component";

import { SharedModule } from "../../shared.module";
import { ShimmerLoadingComponent } from "../shimmer-loading/shimmer-loading.component";
import { DateRangePickerComponent } from "./date-range-picker/date-range-picker.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularEditorModule } from "@kolkov/angular-editor";

@NgModule({
  declarations: [FormsComponentsModule.Components],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ShimmerLoadingComponent,
    HttpClientModule,
    AngularEditorModule,
  ],
  exports: [FormsComponentsModule.Components, AngularEditorModule],
})
export class FormsComponentsModule {
  public static Components = [SelectComponent, DateRangePickerComponent];
}
