import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcityComponent } from './showcity/showcity.component';
import { EmptyComponent } from './empty/empty.component';
import { ShowweatherComponent } from './showweather/showweather.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcityComponent,
    EmptyComponent,
    ShowweatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
