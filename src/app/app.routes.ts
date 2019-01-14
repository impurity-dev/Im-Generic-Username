import {Routes} from '@angular/router';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

export const appRoutes: Routes = [
  { path: '',
    pathMatch: 'full',
    component: LandingPageComponent
  },
  { path: '**', component: PageNotFoundComponent }
];
