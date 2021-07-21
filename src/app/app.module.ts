import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptorService } from 'src/services/token-interceptor.service';
import { AuthService } from 'src/services/auth.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/guard/auth.guard'; 
@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule, 
     ToastrModule.forRoot(),
     ReactiveFormsModule  
  ],
  providers: [ AuthService,AuthGuard, 
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
