/* eslint-disable @typescript-eslint/no-explicit-any */
import jsPDF from 'jspdf'
import papaparse from "papaparse"
import * as XLXS from 'xlsx'

import autoTable from 'jspdf-autotable'








/**
 * The function `exportExcel` takes in data and a filename, converts the data to a JSON sheet, creates
 * a new workbook, appends the sheet to the workbook, and writes the workbook to an Excel file with the
 * specified filename.
 * @param {any} data - The `data` parameter is the JSON data that you want to export to an Excel file.
 * It should be an array of objects, where each object represents a row in the Excel file.
 * @param {string} filename - The filename parameter is a string that specifies the name of the Excel
 * file that will be exported.
 */
export function  exportExcel(data:Record<string, any>[], filename:string){
    const ws = XLXS.utils.json_to_sheet(data)
    const wb = XLXS.utils.book_new()
    XLXS.utils.book_append_sheet(wb, ws, 'Sheet1')
    XLXS.writeFile(wb, filename+".xlsx")
}


/**
 * The function `exportPdf` takes an array of data and a filename as input, and generates a PDF file
 * with the data using the jsPDF library.
 * @param {Record<string, any>[]} data - The `data` parameter is an array of objects, where each object
 * represents a row of data. Each object should have keys that correspond to the column headers, and
 * the values should be the data for each column.
 * @param {string} filename - The `filename` parameter is a string that represents the name of the PDF
 * file that will be generated.
 */
export function exportPdf(data:Record<string, any>[], filename:string){
    const doc = new jsPDF();
    const headers = Object.keys(data[0]);

    // Build header array for autoTable
    const headerArray = headers.map(header => header.charAt(0).toUpperCase() + header.slice(1));
    
    // Build data array for autoTable
    const dataArray = data.map(row => headers.map(header => row[header]));
    
    autoTable(doc,{
        head: [headerArray],
        body: dataArray, styles: {
            fontSize:headerArray.length > 5 ? 8 : 12
        }
    });
    
    doc.save(filename+".pdf");
}

/**
 * The function `exportCsv` takes in data and a filename, converts the data to a CSV format using the
 * PapaParse library, creates a download link for the CSV file, and triggers the download of the file.
 * @param {any} data - The `data` parameter is the data that you want to export as a CSV file. It can
 * be an array of objects or an array of arrays, depending on the structure of your data.
 * @param {string} filename - The `filename` parameter is a string that specifies the name of the file
 * that will be downloaded. It should include the file extension, such as ".csv" for a CSV file.
 */
export function exportCsv(data:Record<string, any>[], filename:string){
    const csv = papaparse.unparse(data)
    const blob = new Blob([csv], { type: 'text/csv' })
    const link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = filename
    link.click()
}



export function exportPrint(data:Record<string, any>[]){

    const doc = new jsPDF();
    const headers = Object.keys(data[0]);

    // Build header array for autoTable
    const headerArray = headers.map(header => header.charAt(0).toUpperCase() + header.slice(1));
    
    // Build data array for autoTable
    const dataArray = data.map(row => headers.map(header => row[header]));
    
    autoTable(doc,{
        head: [headerArray],
        body: dataArray,
    });



    const printWindow = window.open('', '_blank');
    printWindow?.document.open();
    printWindow?.document.write('<html><head><title>Print</title></head><body>');
    printWindow?.document.write('<embed width="100%" height="100%" name="plugin" src="' + doc.output('datauristring') + '" type="application/pdf">');
    printWindow?.document.write('</body></html>');
    printWindow?.document.close();
    printWindow?.print();
}