/* eslint-disable @typescript-eslint/no-explicit-any */
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import papaparse from "papaparse";
import * as XLSX from "xlsx";

/**
 * Exports data to Excel with improved handling for nested data and many columns
 * @param {Record<string, any>[]} data - Data to export
 * @param {string} filename - Name for the exported file
 * @param {object} options - Additional export options
 */
export function exportExcel(
  data: Record<string, any>[],
  filename: string,
  options: { flatten?: boolean; maxDepth?: number } = {}
) {
  // Process data if needed
  const processedData =
    options.flatten !== false ? flattenData(data, options.maxDepth || 3) : data;

  const ws = XLSX.utils.json_to_sheet(processedData);
  const wb = XLSX.utils.book_new();

  // Set column widths based on content
  const columnWidths: { wch: number }[] = [];
  const headers = Object.keys(processedData[0] || {});

  // Get optimal column widths
  headers.forEach((header, i) => {
    const headerWidth = Math.min(header.length, 50);
    let maxWidth = headerWidth;

    // Check data width (for first 100 rows to avoid performance issues)
    processedData.slice(0, 100).forEach((row) => {
      const cellValue = String(row[header] || "");
      maxWidth = Math.max(maxWidth, Math.min(cellValue.length, 50));
    });

    columnWidths[i] = { wch: maxWidth + 2 }; // Add padding
  });

  ws["!cols"] = columnWidths;

  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  XLSX.writeFile(wb, filename + ".xlsx");
}










/**
 * Flattens nested objects in an array for export purposes
 * @param {Record<string, any>[]} data - The array of objects that may contain nested data
 * @param {number} maxDepth - Maximum nesting depth to process
 * @returns {Record<string, any>[]} Flattened array of objects
 */
function flattenData(data: Record<string, any>[], maxDepth: number = 3): Record<string, any>[] {
  const flatten = (obj: Record<string, any>, prefix: string = '', depth: number = 0): Record<string, any> => {
    const result: Record<string, any> = {};
    
    for (const key in obj) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      // Handle nested objects (but not arrays or null)
      if (value && typeof value === 'object' && !Array.isArray(value) && depth < maxDepth) {
        Object.assign(result, flatten(value, newKey, depth + 1));
      } 
      // For arrays or deeply nested objects, stringify them
      else if (value && typeof value === 'object') {
        result[newKey] = JSON.stringify(value);
      } 
      // For primitive values
      else {
        result[newKey] = value;
      }
    }
    
    return result;
  };
  
  return data.map(item => flatten(item));
}

/**
 * Truncates headers and values for better display in exports
 * @param {string} value - The string to truncate
 * @param {number} maxLength - Maximum allowed length
 * @returns {string} Truncated string
 */
function truncateValue(value: string, maxLength: number = 30): string {
  if (typeof value !== 'string') {
    return String(value);
  }
  return value.length > maxLength ? value.substring(0, maxLength) + '...' : value;
}

/**
 * Formats a header for display
 * @param {string} header - The raw header key
 * @returns {string} Formatted header
 */
function formatHeader(header: string): string {
  return header.charAt(0).toUpperCase() + 
         header.slice(1).replace(/([A-Z])/g, ' $1').replace(/\./g, ' › ');
}

/**
 * Exports data to PDF with column pagination for better readability
 * @param {Record<string, any>[]} data - Data to export
 * @param {string} filename - Name for the exported file
 * @param {object} options - Additional export options
 */
export function exportPdf(
  data: Record<string, any>[], 
  filename: string, 
  options: { 
    flatten?: boolean, 
    maxDepth?: number, 
    maxColWidth?: number,
    maxColumnsPerPage?: number,
    includeIdColumn?: boolean,
    title?: string
  } = {}
) {
  if (!data || data.length === 0) {
    console.warn('No data to export');
    return;
  }

  // Process data if needed
  const processedData = options.flatten !== false ? flattenData(data, options.maxDepth || 3) : data;
  const maxColWidth = options.maxColWidth || 30;
  const maxColumnsPerPage = options.maxColumnsPerPage || 7; // Default max columns per page
  const includeIdColumn = options.includeIdColumn !== false; // Default to including ID column
  const title = options.title || 'Data Export';
  
  // Get all headers
  const allHeaders = Object.keys(processedData[0] || {});
  
  // Initialize PDF in landscape for better column display
  const doc = new jsPDF({ orientation: 'landscape' });
  
  // Calculate how many column groups we'll need
  const idColumn = includeIdColumn ? [allHeaders[0]] : []; // Assume first column is ID/primary key
  const dataColumns = includeIdColumn ? allHeaders.slice(1) : allHeaders;
  
  // Split columns into groups (each group will be a separate table/page)
  const columnGroups = [];
  for (let i = 0; i < dataColumns.length; i += maxColumnsPerPage) {
    const group = dataColumns.slice(i, i + maxColumnsPerPage);
    // Always include the ID column in each group if specified
    columnGroups.push([...idColumn, ...group]);
  }
  
  // Add document title
  doc.setFontSize(18);
  doc.text(title, doc.internal.pageSize.getWidth() / 2, 15, { align: 'center' });
  doc.setFontSize(12);
  
  // Process each column group
  columnGroups.forEach((columnGroup, groupIndex) => {
    // Add a new page for each group after the first
    if (groupIndex > 0) {
      doc.addPage();
      doc.setFontSize(18);
      doc.text(title, doc.internal.pageSize.getWidth() / 2, 15, { align: 'center' });
      doc.setFontSize(10);
      doc.text(`Page ${groupIndex + 1} of ${columnGroups.length}`, doc.internal.pageSize.getWidth() / 2, 22, { align: 'center' });
    } else {
      doc.setFontSize(10);
      doc.text(`Page ${groupIndex + 1} of ${columnGroups.length}`, doc.internal.pageSize.getWidth() / 2, 22, { align: 'center' });
    }
    
    // Format headers for this group
    const headerArray = columnGroup.map(header => {
      return truncateValue(formatHeader(header), maxColWidth);
    });
    
    // Prepare data for this group
    const dataArray = processedData.map(row => 
      columnGroup.map(header => {
        const value = row[header] === null || row[header] === undefined ? '' : row[header];
        return truncateValue(String(value), maxColWidth);
      })
    );
    
    // Determine font size based on column count
    const fontSize = columnGroup.length > 5 ? 8 : 10;
    
    // Calculate column widths - distribute available space
    const pageWidth = doc.internal.pageSize.getWidth() - 40; // margins
    const columnWidths: { [key: number]: { cellWidth: number } } = {};
    
    columnGroup.forEach((_header, index) => {
      // ID column gets less space, other columns are evenly distributed
      if (includeIdColumn && index === 0) {
        columnWidths[index] = { cellWidth: pageWidth * 0.1 }; // 10% width for ID column
      } else {
        // Distribute remaining width among data columns
        const remainingWidth = includeIdColumn ? pageWidth * 0.9 : pageWidth;
        const remainingColumns = includeIdColumn ? columnGroup.length - 1 : columnGroup.length;
        columnWidths[index] = { cellWidth: remainingWidth / remainingColumns };
      }
    });
    
    // Create table for this column group
    autoTable(doc, {
      startY: 30, // Start below the title
      head: [headerArray],
      body: dataArray,
      styles: {
        fontSize: fontSize,
        cellPadding: 2,
        overflow: 'linebreak',
        lineWidth: 0.1,
        valign: 'middle'
      },
      columnStyles: columnWidths,
      didDrawPage: (_data) => {
        // Add page numbers on each page
        doc.setFontSize(8);
        doc.text(
          `${groupIndex + 1}/${columnGroups.length}`,
          doc.internal.pageSize.getWidth() - 20,
          doc.internal.pageSize.getHeight() - 10
        );
      }
    });
  });
  
  doc.save(filename + ".pdf");
}

/**
 * Exports data to multiple PDFs, each with a subset of columns
 * For extremely wide datasets that need separate files
 * @param {Record<string, any>[]} data - Data to export
 * @param {string} filename - Base name for the exported files
 * @param {object} options - Additional export options
 */
export function exportMultiplePdfs(
  data: Record<string, any>[], 
  filename: string, 
  options: { 
    flatten?: boolean, 
    maxDepth?: number, 
    columnsPerFile?: number,
    includeIdColumn?: boolean
  } = {}
) {
  if (!data || data.length === 0) {
    console.warn('No data to export');
    return;
  }

  // Process data if needed
  const processedData = options.flatten !== false ? flattenData(data, options.maxDepth || 3) : data;
  const columnsPerFile = options.columnsPerFile || 10;
  const includeIdColumn = options.includeIdColumn !== false;
  
  // Get all headers
  const allHeaders = Object.keys(processedData[0] || {});
  
  // Extract ID column and data columns
  const idColumn = includeIdColumn ? [allHeaders[0]] : [];
  const dataColumns = includeIdColumn ? allHeaders.slice(1) : allHeaders;
  
  // Split columns into groups
  const columnGroups = [];
  for (let i = 0; i < dataColumns.length; i += columnsPerFile) {
    const group = dataColumns.slice(i, i + columnsPerFile);
    columnGroups.push([...idColumn, ...group]);
  }
  
  // Generate multiple PDF files
  columnGroups.forEach((columnGroup, index) => {
    const doc = new jsPDF({ orientation: 'landscape' });
    
    // Add title
    const partTitle = `Data Export (Part ${index + 1} of ${columnGroups.length})`;
    doc.setFontSize(18);
    doc.text(partTitle, doc.internal.pageSize.getWidth() / 2, 15, { align: 'center' });
    
    // Format headers
    const headerArray = columnGroup.map(header => formatHeader(header));
    
    // Prepare data for this group
    const dataArray = processedData.map(row => 
      columnGroup.map(header => {
        const value = row[header] === null || row[header] === undefined ? '' : row[header];
        return String(value);
      })
    );
    
    // Create table
    autoTable(doc, {
      startY: 25,
      head: [headerArray],
      body: dataArray,
      styles: {
        fontSize: 10,
        overflow: 'linebreak'
      }
    });
    
    doc.save(`${filename}-part-${index + 1}.pdf`);
  });
  
  return columnGroups.length; // Return number of files created
}














/**
 * Exports data to CSV with improved handling for nested data
 * @param {Record<string, any>[]} data - Data to export
 * @param {string} filename - Name for the exported file
 * @param {object} options - Additional export options
 */
export function exportCsv(
  data: Record<string, any>[],
  filename: string,
  options: { flatten?: boolean; maxDepth?: number } = {}
) {
  // Process data if needed
  const processedData =
    options.flatten !== false ? flattenData(data, options.maxDepth || 3) : data;

  const csv = papaparse.unparse(processedData, {
    quotes: true, // Force quotes around all fields for better handling of commas and newlines
    newline: "\r\n", // Windows-style newlines for maximum compatibility
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = filename + ".csv";
  link.click();
}

/**
 * Exports data to a printable window with improved formatting
 * @param {Record<string, any>[]} data - Data to export
 * @param {object} options - Additional export options
 */
export function exportPrint(
  data: Record<string, any>[],
  options: { flatten?: boolean; maxDepth?: number; title?: string } = {}
) {
  // Process data if needed
  const processedData =
    options.flatten !== false ? flattenData(data, options.maxDepth || 3) : data;
  const title = options.title || "Data Export";

  const headers = Object.keys(processedData[0] || {});

  // Create a new window for printing
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;

  // Create custom HTML for better print layout
  printWindow.document.open();
  printWindow.document.write(`
    <html>
    <head>
      <title>${title}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table { border-collapse: collapse; width: 100%; }
        th { background-color: #f2f2f2; text-align: left; padding: 8px; border: 1px solid #ddd; }
        td { padding: 8px; border: 1px solid #ddd; word-break: break-word; }
        tr:nth-child(even) { background-color: #f9f9f9; }
        h1 { text-align: center; margin-bottom: 20px; }
        @media print {
          h1 { margin-top: 0; }
          table { page-break-inside: auto; }
          tr { page-break-inside: avoid; page-break-after: auto; }
          thead { display: table-header-group; }
        }
      </style>
    </head>
    <body>
      <h1>${title}</h1>
      <table>
        <thead>
          <tr>
            ${headers
              .map((header) => {
                const formatted =
                  header.charAt(0).toUpperCase() +
                  header.slice(1).replace(/([A-Z])/g, " $1");
                return `<th>${formatted}</th>`;
              })
              .join("")}
          </tr>
        </thead>
        <tbody>
          ${processedData
            .map(
              (row) => `
            <tr>
              ${headers
                .map((header) => {
                  const value =
                    row[header] === null || row[header] === undefined
                      ? ""
                      : row[header];
                  return `<td>${String(value)}</td>`;
                })
                .join("")}
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    </body>
    </html>
  `);

  printWindow.document.close();

  // Slight delay to ensure content is loaded before printing
  setTimeout(() => {
    printWindow.print();
  }, 500);
}
