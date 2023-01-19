import { Pipe, PipeTransform } from "@angular/core";
import { isObservable, Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { SelectListOption } from "../helpers/select-list-option.model";

@Pipe({
  name: "SelectOptionsMapper",
})
export class SelectOptionsMapperPipe implements PipeTransform {
  public transform(
    array: Observable<unknown[]> | unknown[],
    idKey = "value",
    nameKey = "text"
  ): Observable<SelectListOption[]> | SelectListOption[] {
    if (isObservable(array)) {
      return array.pipe(
        filter((arr) => !!arr),
        map((arr) => {
          return this.mapArrayToSelect(arr, idKey, nameKey);
        })
      );
    } else {
      return this.mapArrayToSelect(array, idKey, nameKey);
    }
  }

  private mapArrayToSelect(
    array: unknown[],
    idKey: string,
    nameKey: string
  ): SelectListOption[] {
    if (array instanceof Array) {
      return (
        array?.map((i: any) => {
          return { id: i[idKey], name: i[nameKey] };
        }) ?? []
      );
    }
    return [];
  }
}
