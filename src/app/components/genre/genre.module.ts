import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenreComponent} from './genre.component';
import {GenreRoutingModule} from "./genre-routing.module";
import {SkeletonModule} from "../../shared/skeleton/skeleton.module";


@NgModule({
  declarations: [
    GenreComponent
  ],
  imports: [
    CommonModule,
    GenreRoutingModule,
    SkeletonModule
  ]
})
export class GenreModule {
}
