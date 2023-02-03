import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';

@NgModule({
  declarations: [MainLayoutRoutingModule.Component],
  imports: [CommonModule, MainLayoutRoutingModule],
})
export class MainLayoutModule {}
