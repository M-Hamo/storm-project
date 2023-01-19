import { Pipe, PipeTransform } from "@angular/core";
import { SelectListOption } from "../helpers/select-list-option.model";

@Pipe({
  name: "enumSelectOptionsMapper",
})
/**
 * Creates an array from an enum
 */
export class EnumSelectOptionsMapperPipe implements PipeTransform {
  public transform(enm: any, switchKeys = false): SelectListOption[] {
    if (enm) {
      return Object.keys(enm).map((k: string) => {
        return switchKeys
          ? { id: k.toLowerCase(), name: enm[k] }
          : { id: enm[k], name: k.toLowerCase() };
      });
    }
    return [];
  }
}
