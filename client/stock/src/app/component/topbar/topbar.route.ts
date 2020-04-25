/*
 * @description: Topbar Router
 * @author: hyuehua@cn.ibm.com
 * @version 1.0
 * Copyright (c) 2020, IBM All Rights Reserved.
 */
import { Routes, RouterModule } from '@angular/router';
import { TopbarComponent } from './topbar.component';

/*router defined*/
const routes: Routes = [
  {
    path: 'topbar',
    component: TopbarComponent
  },
];

export const TopbarRoutes = RouterModule.forChild(routes);
