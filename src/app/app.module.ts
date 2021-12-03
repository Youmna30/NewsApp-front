import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TokenService } from './services/token.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './views/profile/profile.component';
import { NewsComponent } from './views/news/news.component';
import { NewsSingleComponent } from './views/news-single/news-single.component';
import { SignupComponent } from './views/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    NewsComponent,
    NewsSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ 
    AuthService,
    // ProfileService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
