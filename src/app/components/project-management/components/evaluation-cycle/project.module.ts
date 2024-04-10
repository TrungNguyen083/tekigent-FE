import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationCycleRoutingModule } from './project-routing.module';
import { EvaluationCycleComponent } from './project.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { EvaluationItemCardComponent } from './components/evaluation-item-card/evaluation-item-card.component';
import { EvaluationCycleInfoFormComponent } from './components/evaluation-cycle-info-form/evaluation-cycle-info-form.component';


@NgModule({
  declarations: [
  
    EvaluationCycleComponent,
       EvaluationItemCardComponent,
       EvaluationCycleInfoFormComponent
  ],
  imports: [
    CommonModule,
    EvaluationCycleRoutingModule,
    ButtonModule,
    DropdownModule
  ]
})
export class EvaluationCycleModule { }
