import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

export const routes: Routes = [
    {
        path: '',
        component: HeaderComponent
    },
    {
        path: 'carrousel',
        component: CarrouselComponent
    }
];
