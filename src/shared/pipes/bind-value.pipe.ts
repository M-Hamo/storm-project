import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "bindValue",
})
export class BindValuePipe implements PipeTransform {
  public transform(item: any, bundValue: string): any {
    return item[bundValue];
  }
}
