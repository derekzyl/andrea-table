/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  exportCsv,
  exportExcel,
  exportPdf,
  exportPrint,
} from "../file_download_handler";

/**
 * The function `handleFileExport` takes in a file type and data, and based on the file type, it
 * exports the data in the specified format (csv, excel, pdf, or print).
 * @param {string} file_type - A string representing the type of file to be exported. It can be one of
 * the following values: "csv", "excel", "pdf", or "print".
 * @param {Record<string, any>[]} data - The `data` parameter is an array of objects, where each object
 * represents a record of data. The objects can have any number of properties, with the property names
 * being strings and the property values being of any type.
 */
export function handleFileExport(
  file_type: string,
  data: Record<string, any>[], tableName:string
) {
  const table = tableName??'data';
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const name = `${table}-${seconds}-${minutes}-${hours}-${day}-${month}-${year}`;

  switch (file_type) {
    case "csv":
      exportCsv(data, name);
      break;
    case "excel":
      exportExcel(data, name);
      break;
    case "pdf":
      exportPdf(data, name);
      break;
    case "print":
      exportPrint(data);
      break;
    default:
      // exportCSV();
      break;
  }
}
