import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatePipe} from "./date.pipe";
import {TimePipe} from './time.pipe';
import {NumberWithCommasPipe} from './number-with-commas.pipe';


@NgModule({
  declarations: [
    DatePipe,
    TimePipe,
    NumberWithCommasPipe,
  ],
  exports: [
    DatePipe,
    TimePipe,
    NumberWithCommasPipe
  ],
  imports: [
    CommonModule
  ],

})
export class PipeModule {
}
