/*
 * @description: Chartresult Router
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { Routes, RouterModule } from '@angular/router';
import { ChartresultComponent } from '../chartresult/chartresult.component';

/*router defined*/
const routes: Routes = [
  {
    path: 'import',
    component: ChartresultComponent
  },
];

export const ChartresultRoutes = RouterModule.forChild(routes);
