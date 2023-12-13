import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(minutes: number): string {
    let seconds = minutes * 60;

    const hours = Math.floor(seconds / 3600);

    const mins = Math.floor((seconds % 3600) / 60);

    return `${hours ? hours + 'h' : ''} ${mins}min`;
  }

}
