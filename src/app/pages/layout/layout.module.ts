import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplacePipe } from './../../tools/replace-pipe'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from "@angular/common";
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { EconomicComponent } from './economic/economic.component';
import { FinancialComponent } from './financial/financial.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    LayoutRoutingModule,
    CommonModule
  ],
  declarations: [
    LayoutComponent,
    EconomicComponent,
    FinancialComponent,
    ReplacePipe
  ]
})
export class LayoutModule { }
