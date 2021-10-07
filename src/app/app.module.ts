import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaiComponent } from './pai/pai.component';
import { SliderComponent } from './filho/slider.component';
import { SlideItemComponent } from './slide-item/slide-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiComponent,
    SliderComponent,
    SlideItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
