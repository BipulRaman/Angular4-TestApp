import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import HomeComponent from './Component/Home.component';
import AlertComponent from './Component/Alert.component';
import RecentUpdateComponent from './Component/RecentUpdate.component';
import HomeDescriptionComponent from './Component/HomeDescription.component'


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HomeComponent, AlertComponent, RecentUpdateComponent, HomeDescriptionComponent ],
  bootstrap:    [ HomeComponent ]
})
export class HomeModule { }