import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { MainRegisterLoginComponent } from './main-register-login/main-register-login.component';
import { PaymentProcessComponent } from './payment-process/payment-process.component';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainRegisterLoginComponent,
    title: 'Login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {
  public static Components = [
    MainRegisterLoginComponent,
    PaymentProcessComponent,
    CreateAccountComponent,
    CompanyDetailsComponent,
    SubscriptionPlanComponent,
    LoginComponent,
  ];
}
