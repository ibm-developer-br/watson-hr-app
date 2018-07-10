import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './app.module.material';

import { AppComponent } from './app.component';
import { MainPersonalityPageComponent } from './main-personality-page/main-personality-page.component';
import { ChangeParamsPersonalityPageComponent } from './change-params-personality-page/change-params-personality-page.component';
import { NluPageComponent } from './nlu-page/nlu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPersonalityPageComponent,
    ChangeParamsPersonalityPageComponent,
    NluPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }