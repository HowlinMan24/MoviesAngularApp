import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../app/components/home/home.component";
import {DetailsComponent} from "../app/components/details/details.component";
import {DetailsActorsComponent} from "../app/components/details-actors/details-actors.component";
import {DetailsMoviesComponent} from "../app/components/details-movies/details-movies.component";
import {DetailsReviewsComponent} from "../app/components/details-reviews/details-reviews.component";
import {SearchComponent} from "../app/components/search/search.component";
import {NotFoundComponent} from "../app/components/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'details/actors/:id', component: DetailsActorsComponent},
  {path: 'details/movies/:id', component: DetailsMoviesComponent},
  {path: 'details/reviews/:id', component: DetailsReviewsComponent},
  // {path: 'feedback', component: FeedBackComponent},
  {path: 'search/:movieTitle', component: SearchComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutesModule {

}
