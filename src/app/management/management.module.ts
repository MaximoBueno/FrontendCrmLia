import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { SaleComponent } from './pages/sale/sale.component';
import { LayoutComponent } from './pages/layout/layout.component';

@NgModule({
  declarations: [
    SaleComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
