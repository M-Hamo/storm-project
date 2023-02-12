import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSideBarComponent } from 'src/layout/dashboard-side-bar/dashboard-side-bar.component';
import { AssetsComponent } from './attack-surface/assets/assets.component';
import { VulnerabilitiesComponent } from './attack-surface/vulnerabilities/vulnerabilities.component';
import { DashboardLayoutComponent } from './dashboard-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    title: 'Dashboard',
    children: [
      {
        path: '',
        redirectTo: 'assets',
        pathMatch: 'full',
      },
      {
        path: 'assets',
        component: AssetsComponent,
        title: 'Assets',
      },
      {
        path: 'vulnerabilities',
        component: VulnerabilitiesComponent,
        title: 'Vulnerabilities',
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
    AssetsComponent,
    VulnerabilitiesComponent,
  ];
}
