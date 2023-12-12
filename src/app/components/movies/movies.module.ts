import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesComponent} from './movies.component';
import {MoviesRoutingModule} from "./movies-routing.module";
import {SkeletonModule} from "../../shared/skeleton/skeleton.module";
import {FormsModule} from "@angular/forms";
import {PaginatorModule} from "primeng/paginator";


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SkeletonModule,
    FormsModule,
    PaginatorModule
  ]
})
export class MoviesModule {

}
