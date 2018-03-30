import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	RouterModule.forRoot([
		{
			path:'',
			component: HomeComponent
		},
		{
			path:'login',
			component: LoginComponent
		},
		{
			path:'register',
			component: RegistrationComponent
		} 
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
