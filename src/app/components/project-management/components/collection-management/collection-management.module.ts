import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionManagementRoutingModule } from './collection-management-routing.module';
import { CollectionManagementComponent } from './collection-management.component';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CollectionItemComponent } from './components/collection-item/collection-item.component';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { PaginatorModule } from 'primeng/paginator';
import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { ShareModule } from "../../../share/share.module";
import { CollectionCreateFormComponent } from './components/collection-create-form/collection-create-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
    declarations: [
        CollectionManagementComponent,
        CollectionListComponent,
        CollectionItemComponent,
        CollectionCreateFormComponent,
    ],
    imports: [
        CommonModule,
        CollectionManagementRoutingModule,
        ButtonModule,
        DropdownModule,
        AppTopbarModule,
        PaginatorModule,
        ShareModule,
        ReactiveFormsModule,
        InputTextModule,
        InputTextareaModule,
    ]
})
export class CollectionManagementModule { }
