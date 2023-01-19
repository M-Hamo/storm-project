import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "groupBy",
})
export class GroupByPipe implements PipeTransform {
  public transform(array: any[], key: any): any[][] {
    const groupingProcess: any = array.reduce((result, obj) => {
      (result[obj[key]] = result[obj[key]] || []).push(obj);
      return result;
    }, {});

    return Object.keys(groupingProcess).map((key: any) => groupingProcess[key]);
  }
}
