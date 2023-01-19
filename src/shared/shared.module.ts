import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { LazyLoadImageModule } from "ng-lazyload-image";
import { MaterialModule } from "./material.module";

import { ButtonBarComponent } from "./components/button-action/button-bar/button-bar.component";
import { ButtonComponent } from "./components/button-action/button/button.component";
import { NoDataComponent } from "./components/no-data/no-data.component";
import { AppImageComponent } from "./components/elements/app-img/app-img.component";
import { UserComponent } from "./components/user/user.component";
import { PageComponentComponent } from "./components/page-component/page-component.component";
import { BackButtonDirective } from "./directives/back-button.directive";
import { TableComponent } from "./components/table/table.component";
import { EnumSelectOptionsMapperPipe } from "./pipes/enum-select-options.pipe";
import { SelectOptionsMapperPipe } from "./pipes/select-options.pipe";
import { SelectSearchPipe } from "./pipes/select-search.pipe";
import { MatPaginatorIntl } from "@angular/material/paginator";
import { CustomMatPaginator } from "./services/custom-mat-paginator.service";
import { AutofocusDirective } from "./directives/autofocus.directive";
import { SplitCamelWordPipe } from "./pipes/split-camel-word.pipe";
import { BindValuePipe } from "./pipes/bind-value.pipe";
import { GroupByPipe } from "./pipes/group-by.pipe";
import { NoEnterOrSpaceClicksDirective } from "./directives/no-enter-or-space-clickes.directive";

const DIRECTIVES = [
  BackButtonDirective,
  AutofocusDirective,
  NoEnterOrSpaceClicksDirective,
];

const PIPES = [
  EnumSelectOptionsMapperPipe,
  SelectOptionsMapperPipe,
  SelectSearchPipe,
  SplitCamelWordPipe,
  BindValuePipe,
  GroupByPipe,
];

const UI_COMPONENTS = [
  AppImageComponent,
  ButtonComponent,
  ButtonBarComponent,
  NoDataComponent,
  UserComponent,
  PageComponentComponent,
];

const THIRD_MODULES = [MaterialModule, LazyLoadImageModule, TableComponent];

const COMMON_MODULES = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [...UI_COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [...COMMON_MODULES, ...THIRD_MODULES],
  exports: [
    ...COMMON_MODULES,
    ...THIRD_MODULES,
    ...UI_COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginator,
    },
  ],
})
export class SharedModule {}
