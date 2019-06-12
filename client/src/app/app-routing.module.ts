import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManagerComponent} from './manager/manager.component';
import {PlanningDepartmentComponent} from './planning-department/planning-department.component';
import {EditorialDepartmentComponent} from './editorial-department/editorial-department.component';
import {PrintDepartmentComponent} from './print-department/print-department.component';
import {WarehouseComponent} from './warehouse/warehouse.component';

const routes: Routes = [
  {path: 'manager', component: ManagerComponent},
  {path: 'planningDepartment', component: PlanningDepartmentComponent},
  {path: 'editorialDepartment', component: EditorialDepartmentComponent},
  {path: 'printDepartment', component: PrintDepartmentComponent},
  {path: 'warehouse', component: WarehouseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
