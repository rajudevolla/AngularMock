import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'daysCount'
})
export class DaysCountPipe implements PipeTransform {

  transform(value: any, args?: any): string {
    return;
  }

}
