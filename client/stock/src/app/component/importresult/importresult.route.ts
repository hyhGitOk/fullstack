/*
 * @description: Importresult Router
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { Routes, RouterModule } from '@angular/router';
import { ImportresultComponent } from '../importresult/importresult.component';

/*router defined*/
const routes: Routes = [
  {
    path: 'importresult',
    component: ImportresultComponent
  },
];

export const ImportresultRoutes = RouterModule.forChild(routes);
