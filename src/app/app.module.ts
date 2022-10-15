import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { LoginportalComponent } from './loginportal/loginportal.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    AdminLoginComponent,
    LoginportalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
