import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "splitCamelWord",
})
export class SplitCamelWordPipe implements PipeTransform {
  public transform(value: string, separatorOption?: string): string {
    if (typeof value !== "string") return value;

    const result: string = value
      .split(/(?=[A-Z])/)
      .map((w: string) => w?.toLowerCase())
      .join(separatorOption ?? " ");

    return result[0].toUpperCase() + result.slice(1);
  }
}
