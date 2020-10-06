import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Component11Component } from './scenario1/component11/component11.component';
import { Component21Component } from './scenario2/component21/component21.component';
import { Component31Component } from './scenario3/component31/component31.component';
import { Component32Component } from './scenario3/component31/component32/component32.component';
import { Component41Component } from './scenario4/component41/component41.component';
import { Component42Component } from './scenario4/component41/component42/component42.component';
import { Component51Component } from './scenario5/component51/component51.component';
import { Component52Component } from './scenario5/component51/component52/component52.component';
import { Component53Component } from './scenario5/component51/component52/component53/component53.component';
import { Component61Component } from './scenario6/component61/component61.component';
import { Component62Component } from './scenario6/component61/component62/component62.component';
import { Component63Component } from './scenario6/component61/component63/component63.component';


@NgModule({
  declarations: [
    AppComponent,
    Component11Component,
    Component21Component,
    Component31Component,
    Component32Component,
    Component41Component,
    Component42Component,
    Component51Component,
    Component52Component,
    Component53Component,
    Component61Component,
    Component62Component,
    Component63Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
