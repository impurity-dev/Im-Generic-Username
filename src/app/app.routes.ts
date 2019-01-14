import {Routes} from '@angular/router';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {GamesPageComponent} from './components/games-page/games-page.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: LandingPageComponent },
  { path: 'games', component: GamesPageComponent },
  { path: '**', component: PageNotFoundComponent }
];
