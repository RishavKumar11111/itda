import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItdaDetailsComponent } from './add-itda-details/add-itda-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SetTargetComponent } from './set-target/set-target.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'AddItdaDetails',
    component: AddItdaDetailsComponent
  },
  {
    path: 'SetTargetForItda',
    component: SetTargetComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
