import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { LayoutModule } from '@angular/cdk/layout';

import {
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    OverlayModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
