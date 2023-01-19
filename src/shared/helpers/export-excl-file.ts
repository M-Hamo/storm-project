import * as XLSX from "xlsx";

/**
 * @param fileName File name will download in
 * @param data will represented in excel file
 * @returns Download excl file with entered file name
 */
export const exportExcelFile = <T>(fileName: string, data: T[]): void =>
  _exportFile(fileName, data);

const _exportFile = <T>(name: string, data: T[]): void => {
  const fileName: string = `${name}.xlsx`;
  const workSheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
  const workBook: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workBook, workSheet);
  XLSX.writeFile(workBook, fileName);
};
