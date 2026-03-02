import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './compo/nav/nav.component';
import { ApiBarComponent } from './compo/api-bar/api-bar.component';
import { WarningMessageComponent } from './compo/warning-message/warning-message.component';
import { LoadingComponent } from './compo/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ApiBarComponent,
    WarningMessageComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
