import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TvGenreComponent} from "./tv-genre.component";


const routes: Routes = [
  {
    path: '',
    component: TvGenreComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvGenreRoutingModule {
}
