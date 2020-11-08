import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { FundamentalComponent } from './fundamental/fundamental.component';
import { TechnicalComponent } from './technical/technical.component';
import { TrendComponent } from './trend/trend.component'

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'fundamental',
      component: FundamentalComponent,
    },
    {
      path: 'technical',
      component: TechnicalComponent,
    },
    {
      path: 'trend',
      component: TrendComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
