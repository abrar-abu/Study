import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FistCompComponent } from './fist-comp/fist-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FistCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, FistCompComponent]
})
export class AppModule { }
