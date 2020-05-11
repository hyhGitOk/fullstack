import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './component/login';
import { ChartresultModule } from './component/chartresult';
import { TopbarModule } from './component/topbar';
import { ImportdataModule } from './component/importdata';
import { ImportresultModule } from './component/importresult';
import { CompanylistModule } from './component/companylist';
import { ExchangelistModule } from './component/exchangelist';

import { route1s } from './app-routing.module';
import { BaseService } from './base.service';

import { AppComponent } from './app.component';
import { Error404Component } from './component/error404/error404.component';
import { SignupComponent } from './component/signup/signup.component';
import { CompanyComponent } from './component/company/company.component';
import { ExchangeComponent } from './component/exchange/exchange.component';
import { IpodetailComponent } from './component/ipodetail/ipodetail.component';
import { IpolistComponent } from './component/ipolist/ipolist.component';
import { ComparechartComponent } from './component/comparechart/comparechart.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ClickableParentComponent } from 'src/app/render/clickable/clickable.parent.component';
import { LargeTextShowComponent } from 'src/app/render/largeTextShow/largeTextShow.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    SignupComponent,
    CompanyComponent,
    ExchangeComponent,
    IpolistComponent,
    ComparechartComponent,
    ProfileComponent,
    IpodetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginModule,
    ImportdataModule,
    ImportresultModule,
    ChartresultModule,
	CompanylistModule,
	ExchangelistModule,
    TopbarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(route1s),
	NgbModule
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
