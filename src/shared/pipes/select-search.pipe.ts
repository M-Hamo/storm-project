import { Pipe, PipeTransform } from "@angular/core";
import { SelectListOption } from "../helpers/select-list-option.model";

@Pipe({
  name: "selectSearch",
})
export class SelectSearchPipe implements PipeTransform {
  public transform(
    items: SelectListOption[],
    searchTxt: string
  ): SelectListOption[] {
    if (!items?.length || !searchTxt) {
      return items;
    }
    return items?.filter(
      (item) => item?.name.toLowerCase().indexOf(searchTxt.toLowerCase()) > -1
    );
  }
}
