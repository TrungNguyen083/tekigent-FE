import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ChartModule } from 'primeng/chart';
import { ButtonModule } from 'primeng/button';
import { NgApexchartsModule } from "ng-apexcharts";

import { TekigentTableComponent } from './tekigent-table/tekigent-table.component';
import { TekigentPaginationComponent } from './tekigent-pagination/tekigent-pagination.component';
import { TekigentScreenFilterComponent } from './tekigent-screen-filter/tekigent-screen-filter.component';
import { TekigentTabMenuComponent } from './tekigent-tab-menu/tekigent-tab-menu.component';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { TekigentChartComponent } from './tekigent-chart/tekigent-chart.component';
import { DashboardRankTableComponent } from './dashboard-rank-table/dashboard-rank-table.component';
@NgModule({
  declarations: [
    TekigentTableComponent,
    TekigentPaginationComponent,
    TekigentScreenFilterComponent,
    TekigentTabMenuComponent,
    PhoneFormatPipe,
    TekigentChartComponent,
    DashboardRankTableComponent,
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    TableModule,
    SkeletonModule,
    TabMenuModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    ChartModule,
    ButtonModule,
    NgApexchartsModule
  ],
  exports: [
    TekigentTableComponent,
    TekigentTabMenuComponent,
    TekigentScreenFilterComponent,
    PhoneFormatPipe,
    TekigentChartComponent
  ],
})
export class ShareModule {}
