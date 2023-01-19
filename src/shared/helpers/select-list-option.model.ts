import { ClassProperties } from "./types";

export class SelectListOption {
  public id?: number | string;
  public name: string = "";

  public constructor(args: ClassProperties<SelectListOption>) {
    if (args && Object.keys(args).length) {
      Object.assign(this, args);
    }
  }
}
