import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { Error404Component } from './component/error404/error404.component';
import { SignupComponent } from './component/signup/signup.component';
import { TopbarComponent } from './component/topbar/topbar.component';
import { ImportDataComponent } from './component/importdata/importdata.component';
import { ImportresultComponent } from './component/importresult/importresult.component';
import { CompanylistComponent } from './component/companylist/companylist.component';
import { CompanyComponent } from './component/company/company.component';
import { ExchangelistComponent } from './component/exchangelist/exchangelist.component';
import { ExchangeComponent } from './component/exchange/exchange.component';
import { IpodetailComponent } from './component/ipodetail/ipodetail.component';
import { IpolistComponent } from './component/ipolist/ipolist.component';
import { ComparechartComponent } from './component/comparechart/comparechart.component';
import { ChartresultComponent } from './component/chartresult/chartresult.component';
import { ProfileComponent } from './component/profile/profile.component';

export const route1s: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'topbar', component: TopbarComponent },
  { path: 'import', component: ImportDataComponent },
  { path: 'importresult', component: ImportresultComponent },
  { path: 'companylist', component: CompanylistComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'exchangelist', component: ExchangelistComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'ipodetail', component: IpodetailComponent },
  { path: 'ipolist', component: IpolistComponent },
  { path: 'comparechart', component: ComparechartComponent },
  { path: 'chartresult', component: ChartresultComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: Error404Component }
  ];

@NgModule({
  imports: [RouterModule.forRoot(route1s)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
