import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TvGenreComponent} from './tv-genre.component';
import {TvGenreRoutingModule} from "./tv-genre-routing.module";


@NgModule({
  declarations: [
    TvGenreComponent
  ],
  imports: [
    CommonModule,
    TvGenreRoutingModule
  ]
})
export class TvGenreModule {
}
