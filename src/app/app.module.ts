import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PaymentProcessComponent } from './payment-process/payment-process.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { SubscriptionPlanComponent } from './subscription-plan/subscription-plan.component';

@NgModule({
  declarations: [AppRoutingModule.Components, PaymentProcessComponent, CreateAccountComponent, CompanyDetailsComponent, SubscriptionPlanComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
