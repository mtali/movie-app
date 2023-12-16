import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieDetailsComponent} from './movie-details.component';
import {MovieDetailsRoutingModule} from "./movie-details-routing.module";
import {TabViewModule} from "primeng/tabview";
import {PipeModule} from "../../pipe/pipe.module";
import {CarouselModule} from "primeng/carousel";
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    TabViewModule,
    PipeModule,
    CarouselModule,
    DialogModule
  ]
})
export class MovieDetailsModule {
}
