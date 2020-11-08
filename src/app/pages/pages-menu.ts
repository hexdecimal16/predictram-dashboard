import { Injectable } from '@angular/core';
import { NbIconLibraries, NbMenuItem } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  evaIcons: string[];
  constructor(iconsLibrary: NbIconLibraries) {
    // this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
    // .filter(icon => icon.indexOf('outline') === -1);
  
    // iconsLibrary.registerFontPack('font-awesome');
    // iconsLibrary.setDefaultPack('font-awesome');
  }

  MENU_ITEMS: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      children: [
        {
          title: 'Fundamental',
          link: '/pages/home/fundamental',
        },
        {
          title: 'Technical',
          link: '/pages/home/technical',
        },
        {
          title: 'Trend',
          link: '/pages/home/trend',
        }
      ],
      home: true,
    },
    {
      title: 'News',
      icon: 'archive-outline',
      link: '/pages/news',
    },
    {
      title: 'Corporate',
      icon: 'briefcase-outline',
      link: '/pages/corporate',
    },
    {
      title: 'Nifty',
      icon: 'layers-outline',
      link: '/pages/nifty',
    },
    {
      title: 'Forecast',
      icon: 'grid-outline',
      children: [
        {
          title: 'Economic Forecast',
          link: '/pages/layout/economic',
        },
        {
          title: 'Financial Forecast',
          link: '/pages/layout/financial',
        }
      ],
    }
  ];
  
}

