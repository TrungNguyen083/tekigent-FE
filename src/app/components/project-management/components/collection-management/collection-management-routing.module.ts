import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionManagementComponent } from './collection-management.component';
import { CollectionListComponent } from './components/collection-list/collection-list.component';

const routes: Routes = [{
  path: '',
  data: { breadcrumbs: ['Collection Management'] },
  component: CollectionManagementComponent,
  children: [
    {
      path: '',
      component: CollectionListComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionManagementRoutingModule { }
