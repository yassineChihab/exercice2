import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';

const routes: Routes = [
  {path:"movies",component:MoviesComponent},
  {path:"editMovie/:id",component:DetailMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
