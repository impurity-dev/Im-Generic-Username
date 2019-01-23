import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { FlaticonCreditComponent } from './components/flaticon-credit/flaticon-credit.component';
import { FooterComponent } from './components/footer/footer.component';
import { GamesPageComponent } from './components/games-page/games-page.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavItemRemoteComponent } from './components/header/nav-item-remote/nav-item-remote.component';
import { NavItemLocalComponent } from './components/header/nav-item-local/nav-item-local.component';
import { ReferalPageComponent } from './components/referal-page/referal-page.component';
import { GameItemComponent } from './components/games-page/game-item/game-item.component';
import { ViewCountComponent } from './components/landing-page/view-count/view-count.component';
import { FollowerCountComponent } from './components/landing-page/follower-count/follower-count.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    GamesPageComponent,
    FlaticonCreditComponent,
    NavItemRemoteComponent,
    NavItemLocalComponent,
    ReferalPageComponent,
    GameItemComponent,
    ViewCountComponent,
    FollowerCountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
