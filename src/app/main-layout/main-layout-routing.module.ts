import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/layout/footer/footer.component';
import { HeaderComponent } from 'src/layout/header/header.component';
import { MainSideComponent } from 'src/layout/main-side/main-side.component';
import { AccountSettingsComponent } from '../account/account-settings/account-settings.component';
import { AssessmentsComponent } from '../assessment/assessments/assessments.component';
import { AssetsDiscoveryComponent } from '../assessment/automated-offensive-security/assets-discovery/assets-discovery.component';
import { AutomatedOffensiveSecurityComponent } from '../assessment/automated-offensive-security/automated-offensive-security.component';
import { QuestionsStepComponent } from '../assessment/automated-offensive-security/questions-step/questions-step.component';
import { StepperComponent } from '../assessment/automated-offensive-security/stepper/stepper.component';
import { StormRecommendationComponent } from '../assessment/automated-offensive-security/storm-recommendation/storm-recommendation.component';
import { MembersComponent } from '../members/members.component';
import { ReportsComponent } from '../reports/reports.component';
import { SupportComponent } from '../support/support.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    title: 'Main layout',
    children: [
      {
        path: '',
        redirectTo: 'assessments',
        pathMatch: 'full',
      },
      {
        path: 'assessments',
        component: AssessmentsComponent,
        title: 'Assessments',
      },
      {
        path: 'settings',
        component: AccountSettingsComponent,
        title: 'Account settings',
      },
      {
        path: 'automated-security',
        component: AutomatedOffensiveSecurityComponent,
        title: 'Automated security',
        children: [
          {
            path: '',
            redirectTo: 'questions',
            pathMatch: 'full',
          },
          {
            path: 'questions',
            component: QuestionsStepComponent,
            title: 'Questions',
          },
          {
            path: 'assets-discovery',
            component: AssetsDiscoveryComponent,
            title: 'Assets discovery',
          },
          {
            path: 'storm-recommendation',
            component: StormRecommendationComponent,
            title: 'Storm recommendation',
          },
        ],
      },
      {
        path: 'support',
        component: SupportComponent,
        title: 'Support',
      },
      {
        path: 'members',
        component: MembersComponent,
        title: 'Members',
      },
      {
        path: 'reports',
        component: ReportsComponent,
        title: 'Reports',
      },
      //     {
      //       path:"dashboard",

      //   loadChildren: () =>
      //     import('./login-register/login-register.module').then(
      //       (m) => m.LoginRegisterModule
      //     ),
      //   title: 'Login',
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainLayoutRoutingModule {
  public static Component = [
    MainLayoutComponent,
    FooterComponent,
    HeaderComponent,
    MainSideComponent,
    AssessmentsComponent,
    AutomatedOffensiveSecurityComponent,
    StepperComponent,
    QuestionsStepComponent,
    AssetsDiscoveryComponent,
    StormRecommendationComponent,
    SupportComponent,
    MembersComponent,
    ReportsComponent,
    AccountSettingsComponent,
  ];
}
