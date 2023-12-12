import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieDetailsComponent} from './movie-details.component';
import {MovieDetailsRoutingModule} from "./movie-details-routing.module";
import {TabViewModule} from "primeng/tabview";


@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    TabViewModule
  ]
})
export class MovieDetailsModule {
}
