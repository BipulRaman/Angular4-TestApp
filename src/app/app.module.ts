import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './Component/App.component';
import { HomeModule } from './Home/Home.module';

import { routing, appRoutingProviders } from './app.routes';



@NgModule({
  imports:      [ BrowserModule, routing, HomeModule ],
  declarations: [ AppComponent ], 
  providers:    [ appRoutingProviders ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { 
}
