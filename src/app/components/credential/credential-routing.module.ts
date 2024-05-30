import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CredentialComponent } from './credential.component';
import { CredentialDetailComponent } from './components/credential-detail/credential-detail.component';
import { CredentialListComponent } from './components/credential-list/credential-list.component';

const routes: Routes = [
  {
    path: '',
    component: CredentialComponent,
    data: { breadcrumbs: ['Credential'] },
    children: [
      {
        path: '',
        component: CredentialListComponent,
      },
      {
        path: 'detail/:id',
        component: CredentialDetailComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredentialRoutingModule { }
