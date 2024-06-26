import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'profit',
})

export class ProfitPipe implements PipeTransform {
  transform(value: number, profitPercentage = 10): string {
    return (value * profitPercentage * 0.01).toFixed(2);
  }

}
