import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardSideBarComponent } from 'src/layout/dashboard-side-bar/dashboard-side-bar.component';
import { AffectedAssetsComponent } from './attack-surface/affected-assets/affected-assets.component';
import { AssetsComponent } from './attack-surface/assets/assets.component';
import { VulnerabilitiesComponent } from './attack-surface/vulnerabilities/vulnerabilities.component';
import { DarkWebComponent } from './dark-web/dark-web.component';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { GithubLeaksComponent } from './attack-surface/github-leaks/github-leaks.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { XssComponent } from './xss/xss.component';
import { ScanConfigurationComponent } from './scan-configuration/scan-configuration.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { AssetsNamesComponent } from './assets/assets.component';
import { WebVurnelbilityComponent } from './web-vurnelbility/web-vurnelbility.component';

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
      {
        path: 'dark-web',
        component: DarkWebComponent,
        title: 'Dark web',
      },
      {
        path: 'github-leaks',
        component: GithubLeaksComponent,
        title: 'Github leaks',
      },
      {
        path: 'scan-configuration',
        component: ScanConfigurationComponent,
        title: 'Scan Configuration',
      },
      {
        path: 'department-details',
        component: DepartmentDetailsComponent,
        title: 'Department details',
      },
      {
        path: 'assets-name',
        component: AssetsNamesComponent,
        title: 'Department details',
      },
      {
        path: 'web-vulnerabilities',
        component: WebVurnelbilityComponent,
        title: 'Web vulnerabilities',
      },
    ],
  },
  {
    path: 'main',
    component: MainDashboardComponent,
    title: 'Main dashboard',
  },
  {
    path: 'xss',
    component: XssComponent,
    title: 'Reflected cross-site scripting(XSS)',
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
    DarkWebComponent,
    GithubLeaksComponent,
    MainDashboardComponent,
    XssComponent,
    ScanConfigurationComponent,
    DepartmentDetailsComponent,
    AssetsNamesComponent,
    WebVurnelbilityComponent,
  ];
}
