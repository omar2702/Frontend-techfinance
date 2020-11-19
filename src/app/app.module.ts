import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DashBoardComponent } from './dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [LoginComponent],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AppModule { }
