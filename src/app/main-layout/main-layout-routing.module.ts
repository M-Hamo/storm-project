import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from 'src/layout/footer/footer.component';
import { HeaderComponent } from 'src/layout/header/header.component';
import { MainSideComponent } from 'src/layout/main-side/main-side.component';
import { AssessmentsComponent } from '../assessment/assessments/assessments.component';
import { AutomatedOffensiveSecurityComponent } from '../assessment/automated-offensive-security/automated-offensive-security.component';
import { QuestionsStepComponent } from '../assessment/automated-offensive-security/questions-step/questions-step.component';
import { StepperComponent } from '../assessment/automated-offensive-security/stepper/stepper.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    title: 'Login',
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
        ],
      },
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
  ];
}
