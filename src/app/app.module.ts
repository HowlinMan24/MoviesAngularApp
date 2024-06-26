import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {DetailsComponent} from './components/details/details.component';
import {DetailsMoviesComponent} from './components/details-movies/details-movies.component';
import {DetailsReviewsComponent} from './components/details-reviews/details-reviews.component';
import {SearchComponent} from './components/search/search.component';
import {LoaderComponent} from './components/loader/loader.component';
import {ModalComponent} from './components/modal/modal.component';
import {NotAuthorizedComponent} from './components/not-authorized/not-authorized.component';
import {ProfitPipe} from "./pipes/profit.pipe";
import {FormsModule} from "@angular/forms";
import {DetailsActorsComponent} from './components/details-actors/details-actors.component';
import {RouterModule} from "@angular/router";
import {AppRoutesModule} from "../modules/app.routes";
import {NotFoundComponent} from './components/not-found/not-found.component';
import {HeaderDirective} from './directives/header.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    DetailsMoviesComponent,
    DetailsReviewsComponent,
    DetailsActorsComponent,
    SearchComponent,
    ModalComponent,
    LoaderComponent,
    NotFoundComponent,
    NotAuthorizedComponent,

    //Pipes
    ProfitPipe,

    //Directives
    HeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
