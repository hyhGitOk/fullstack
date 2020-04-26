/*
 * @description: Company Router
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from '../company/company.component';

/*router defined*/
const routes: Routes = [
  {
    path: 'import',
    component: CompanyComponent
  },
];

export const CompanyRoutes = RouterModule.forChild(routes);
