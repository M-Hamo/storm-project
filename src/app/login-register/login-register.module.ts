import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [LoginRoutingModule.Components],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginRegisterModule {}
