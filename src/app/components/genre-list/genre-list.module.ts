import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenreListComponent} from './genre-list.component';
import {GenreListRoutingModule} from "./genre-list-routing.module";


@NgModule({
  declarations: [
    GenreListComponent
  ],
  imports: [
    CommonModule,
    GenreListRoutingModule
  ]
})
export class GenreListModule {
}
