import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSideBarComponent } from 'src/layout/dashboard-side-bar/dashboard-side-bar.component';
import { AffectedAssetsComponent } from './attack-surface/affected-assets/affected-assets.component';
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
        redirectTo: 'affected-assets',
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
      {
        path: 'affected-assets',
        component: AffectedAssetsComponent,
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
    AffectedAssetsComponent,
  ];
}
