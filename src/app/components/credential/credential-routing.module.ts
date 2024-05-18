import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialComponent } from './credential.component';

const routes: Routes = [
  {
    path: '',
    component: CredentialComponent,
    data: { breadcrumbs: ['Credential'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentManagementRoutingModule {}
