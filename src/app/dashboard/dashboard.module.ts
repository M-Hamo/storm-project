import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardRoutingModule.Components],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
