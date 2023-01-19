import { Pipe, PipeTransform } from "@angular/core";
import { LanguageService } from "src/app/core/services/language.service";

const formatOptions: Intl.DateTimeFormatOptions = {
  timeStyle: "medium",
  dateStyle: "full",
};

@Pipe({
  name: "localDate",
})
export class LocalDatePipe implements PipeTransform {
  constructor(private readonly languageService: LanguageService) {}

  transform(
    value?: number | string | Date,
    timeStyle?: "medium" | "full" | "long" | "short" | null,
    dateStyle?: "medium" | "full" | "long" | "short" | null
  ): string {
    if (!value) {
      return "";
    }
    if (timeStyle) formatOptions.timeStyle = timeStyle;
    if (timeStyle === null) delete formatOptions.timeStyle;
    if (dateStyle) formatOptions.dateStyle = dateStyle;

    const date = new Date(value);

    const arDateTimeFormat = new Intl.DateTimeFormat("ar-EG", formatOptions);
    const enDateTimeFormat = new Intl.DateTimeFormat("en-EG", formatOptions);

    return this.languageService.lang === "ar"
      ? arDateTimeFormat.format(date)
      : enDateTimeFormat.format(date);
  }
}
