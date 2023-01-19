import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()
export class CustomMatPaginator extends MatPaginatorIntl {
  public constructor() {
    super();
    this.getAndInitTranslations();
  }

  public getAndInitTranslations = (): void => {
    this.itemsPerPageLabel = "العناصر لكل صفحة";
    this.nextPageLabel = "Next page";
    this.previousPageLabel = "Previous page";
    this.changes.next();
  };

  public getRangeLabel = (
    page: number,
    pageSize: number,
    length: number
  ): string => {
    if (length === 0 || pageSize === 0) {
      return `0 / ${length}`;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} ${"  من  "} ${length}`;
  };
}
