import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{FormsModule}from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { CatigoryComponent } from './catigory/catigory.component';
import { ClientComponent } from './client/client.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArticleComponent,
    CatigoryComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
