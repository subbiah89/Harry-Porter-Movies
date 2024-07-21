import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  standalone: true
})
export class TimeFormatPipe implements PipeTransform {

  transform(duration: string): string {
    let totalDur = parseInt(duration);
    let hours = Math.floor(totalDur / 60);
    let minutes = Math.floor(totalDur % 60);
    return hours + 'h ' + minutes + 'min';
  }

}
