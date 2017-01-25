import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from "./app-routing.module";

import { TestComponentsModule } from "./test-components";

import { TestEagerModule } from "./test-eager/";
import { TestEager2Module } from "./test-eager2/";

import { CoreModule } from "./core/";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TestEagerModule,
    TestEager2Module,
    TestComponentsModule,
    CoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
