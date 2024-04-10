import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AddCarComponent } from './add-car/add-car.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CarItemDetailsComponent } from './car-item-details/car-item-details.component';
import { CarItemEditComponent } from './car-item-edit/car-item-edit.component';
import { TestDriveComponent } from './test-drive/test-drive.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'car-item-details/:id', component: CarItemDetailsComponent},
  {path: 'car-item-edit/:id', component: CarItemEditComponent},
  {path: 'add-car', component: AddCarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'test-drive', component: TestDriveComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
