import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TotalComponent } from './total/total.component';
import { TotalService } from './total/total.service';


@NgModule({
  declarations: [
    AppComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	TotalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
