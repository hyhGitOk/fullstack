/*
 * @description: Login Module
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { LoginService } from './login.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login.component';

/*module defined*/
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [LoginComponent],
  entryComponents: [],
  providers: [LoginService],
  exports: [LoginComponent]
})
export class LoginModule { }
