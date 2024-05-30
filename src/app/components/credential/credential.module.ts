import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { ShareModule } from '../share/share.module';
import { CredentialItemComponent } from './components/credential-item/credential-item.component';
import { CredentialListComponent } from './components/credential-list/credential-list.component';
import { CredentialRoutingModule } from './credential-routing.module';
import { CredentialComponent } from './credential.component';
import { CredentialDetailComponent } from './components/credential-detail/credential-detail.component';



@NgModule({
  declarations: [
    CredentialComponent,
    CredentialListComponent,
    CredentialItemComponent,
    CredentialDetailComponent,
  ],
  imports: [
    CredentialRoutingModule,
    CommonModule,
    AppTopbarModule,
    TableModule,
    ShareModule,
    FormsModule,
    MultiSelectModule,
    CheckboxModule,
    ButtonModule,
    RouterModule
  ]
})
export class CredentialModule { }
