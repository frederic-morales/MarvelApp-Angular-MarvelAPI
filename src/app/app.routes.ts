import { Routes } from '@angular/router';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { ComicsComponent } from './components/comics/comics.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: CarrouselComponent,
      },
      {
        path: 'comics/:comicId',
        component: ComicsComponent,
      },
    ],
  },
];
