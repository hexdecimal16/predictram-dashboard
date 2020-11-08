import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { NewsComponent } from './news/news.component';
import { CorporateComponent } from './corporate/corporate.component';
import { NiftyComponent } from './nifty/nifty.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      loadChildren: () => import('./home/home.module')
        .then(m => m.HomeModule),
    },
    {
      path: 'news',
      component: NewsComponent,
    },
    {
      path: 'corporate',
      component: CorporateComponent,
    },
    {
      path: 'nifty',
      component: NiftyComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
