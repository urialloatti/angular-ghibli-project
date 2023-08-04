import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToString'
})
export class MinutesToStringPipe implements PipeTransform {

  transform(duration: number): string {
    const minutes = duration % 60;
    const hours = (duration - minutes) / 60;
    return `${hours}h ${minutes}m`;
  }

}
