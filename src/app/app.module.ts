import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { WorldBankService } from './world-bank.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    WorldBankService
  ],
  bootstrap: []
})
export class AppModule { }