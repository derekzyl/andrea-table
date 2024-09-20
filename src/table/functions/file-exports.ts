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
  data: Record<string, any>[]
) {
  const table_name = "user";
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const name = `${table_name}_${day}_${month}_${year}`;

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
