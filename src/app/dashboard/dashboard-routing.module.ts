import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSideBarComponent } from 'src/layout/dashboard-side-bar/dashboard-side-bar.component';
import { DashboardLayoutComponent } from './dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    title: 'Dashboard',
    children: [
      {
        path: '',
        redirectTo: 'assessments',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
  public static Components = [
    DashboardLayoutComponent,
    DashboardSideBarComponent,
  ];
}
