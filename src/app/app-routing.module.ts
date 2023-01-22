import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainRegisterLoginComponent } from './main-register-login/main-register-login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: MainRegisterLoginComponent,
    title: 'Login',
  },

  {
    path: '**',
    component: MainRegisterLoginComponent,
    title: 'Not found page',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  public static Components = [AppComponent, MainRegisterLoginComponent];
}
