/*
 * @description: Login Router
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

/*router defined*/
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
];

export const LoginRoutes = RouterModule.forChild(routes);
