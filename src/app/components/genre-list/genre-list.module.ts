import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenreListComponent} from './genre-list.component';
import {GenreListRoutingModule} from "./genre-list-routing.module";
import {SkeletonModule} from "../../shared/skeleton/skeleton.module";


@NgModule({
  declarations: [
    GenreListComponent
  ],
  imports: [
    CommonModule,
    GenreListRoutingModule,
    SkeletonModule
  ]
})
export class GenreListModule {
}
