import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItdaRoutingModule } from './itda-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegFormComponent } from './registration/reg-form/reg-form.component';
import { FarmerDetailFormComponent } from './registration/farmer-detail-form/farmer-detail-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ModelSelectionComponent } from './registration/model-selection/model-selection.component';
import { LandVerifyComponent } from './registration/land-verify/land-verify.component';

@NgModule({
  declarations: [DashboardComponent, RegistrationComponent, RegFormComponent, FarmerDetailFormComponent, ModelSelectionComponent, LandVerifyComponent],
  imports: [
    CommonModule,
    ItdaRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule
  ]
})
export class ItdaModule { }
