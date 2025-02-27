import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './Components/sample/sample.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './Components/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    HomeComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
