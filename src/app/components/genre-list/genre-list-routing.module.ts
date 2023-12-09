import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GenreListComponent} from "./genre-list.component";


const routes: Routes = [
  {
    path: '',
    component: GenreListComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreListRoutingModule {
}
