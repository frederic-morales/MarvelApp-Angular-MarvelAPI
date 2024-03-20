import { Routes } from '@angular/router';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { ComicsComponent } from './components/comics/comics.component';
import { SeriesComponent } from './components/series/series.component';
import { AllCharactersComponent } from './components/all-characters/all-characters.component';
import { AllComicsComponent } from './components/all-comics/all-comics.component';
import { AllSeriesComponent } from './components/all-series/all-series.component';

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
        path: 'allCharacters',
        component: AllCharactersComponent,
      },
      {
        path: 'allComics',
        component: AllComicsComponent,
      },
      {
        path: 'allSeries',
        component: AllSeriesComponent,
      },
      {
        path: 'comics/:comicId',
        component: ComicsComponent,
      },
      {
        path: 'series/:serieId',
        component: SeriesComponent,
      },
    ],
  },
];
