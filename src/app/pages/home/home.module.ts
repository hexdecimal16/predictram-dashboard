import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule, 
  NbUserModule, 
  NbTreeGridModule,
  NbAlertModule
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TrendComponent } from './trend/trend.component';
import { TechnicalComponent } from './technical/technical.component';
import { FundamentalComponent } from './fundamental/fundamental.component';

import { FinancialHighlightsComponent } from './fundamental/financial-highlights/financial-highlights.component'
import { KeyBalanceComponent } from './fundamental/key-balance/key-balance.component'
import { KeyCashComponent } from './fundamental/key-cash/key-cash.component'
import { KeyRatiosComponent } from './fundamental/key-ratios/key-ratios.component'
import { FundamentalCompaniesComponent } from './fundamental/comapnies/fundamental-comapnies.component.'
import { TechnicalCompaniesComponent } from './technical/comapnies/technical-comapnies.component'
import { GainComponent } from './technical/gain/gain.component'
import { HighlightsComponent } from './technical/highlights/highlights.component'
import { HighsComponent } from './technical/highs/highs.component'
import { MovingComponent } from './technical/moving/moving.component'
import { TechTechnicalComponent } from './technical/technical/tech-technical.component'
import { VolumeComponent } from './technical/volume/volume.component'
import { TrendCompaniesComponent } from './trend/comapnies/trend-comapnies.component'

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
    HomeRoutingModule,
    NbTreeGridModule,
    NbAlertModule
  ],
  declarations: [
    HomeComponent,
    TrendComponent,
    TechnicalComponent,
    FundamentalComponent,
    FinancialHighlightsComponent,
    KeyBalanceComponent,
    KeyCashComponent,
    KeyRatiosComponent,
    FundamentalCompaniesComponent,
    TechnicalCompaniesComponent,
    GainComponent,
    HighlightsComponent,
    HighsComponent,
    MovingComponent,
    TechTechnicalComponent,
    VolumeComponent,
    TrendCompaniesComponent
  ]
})
export class HomeModule { }
