import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { AddCarComponent } from './add-car/add-car.component';
import { UserModule } from './user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CarItemEditComponent } from './car-item-edit/car-item-edit.component';
import { CarItemDetailsComponent } from './car-item-details/car-item-details.component';
import { appHttpInterceptorProvider } from './app-http.interceptor';
import { TestDriveComponent } from './test-drive/test-drive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogComponent,
    AddCarComponent,
    ErrorPageComponent,
    CarItemEditComponent,
    CarItemDetailsComponent,
    TestDriveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [appHttpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
