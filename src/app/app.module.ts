import { AppRoutingModule } from './app.routing.module';
import { AboutComponent } from './components/pages/about.component';
import { HomeComponent } from './components/pages/home.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
