/*
 * @description: Importdata Router
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { Routes, RouterModule } from '@angular/router';
import { ImportDataComponent } from '../importdata/importdata.component';

/*router defined*/
const routes: Routes = [
  {
    path: 'import',
    component: ImportDataComponent
  },
];

export const ImportdataRoutes = RouterModule.forChild(routes);
