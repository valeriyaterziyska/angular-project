import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { MinCountDirective } from './min-count.directive';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    MinCountDirective,
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [LoginComponent, RegisterComponent]
})
export class UserModule { }
