import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], prop: string = "id", order: string): any[] {

    return arr.sort(sortFn);

    function sortFn(a, b): number {
      let x = typeof a[prop] == "number" ? a[prop] : a[prop].toString().toLowerCase();
      let y = typeof b[prop] == "number" ? b[prop] : b[prop].toString().toLowerCase();
      if (x == y) return 0;
      if (order == "asc")
        if (x < y) return -1; else return 1;
      else
        if (x < y) return 1; else return -1;
    }
  }

}
