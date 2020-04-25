import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './component/login';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { route1s } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { BaseService } from './base.service';
import { TopbarModule } from './component/topbar';
import { ImportdataModule } from './component/importdata';
import { Error404Component } from './component/error404/error404.component';
import { SignupComponent } from './component/signup/signup.component';
import { CompanylistComponent } from './component/companylist/companylist.component';
import { CompanyComponent } from './component/company/company.component';
import { ExchangelistComponent } from './component/exchangelist/exchangelist.component';
import { ExchangeComponent } from './component/exchange/exchange.component';
import { IpodetailComponent } from './component/ipodetail/ipodetail.component';
import { IpolistComponent } from './component/ipolist/ipolist.component';
import { ComparechartComponent } from './component/comparechart/comparechart.component';
import { ChartresultComponent } from './component/chartresult/chartresult.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ImportresultModule } from './component/importresult';
import { ClickableParentComponent } from 'src/app/render/clickable/clickable.parent.component';
import { LargeTextShowComponent } from 'src/app/render/largeTextShow/largeTextShow.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    SignupComponent,
    CompanylistComponent,
    CompanyComponent,
    ExchangelistComponent,
    ExchangeComponent,
    IpolistComponent,
    ComparechartComponent,
    ChartresultComponent,
    ProfileComponent,
    IpodetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginModule,
    ImportdataModule,
    ImportresultModule,
    TopbarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(route1s)
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
