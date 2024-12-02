

import { handleColumnVisibility } from "../functions/column-visible";
import { handleFileExport } from "../functions/file-exports";
import { toggleColumnMenu } from "../functions/toggleMenu";
import { useTableContext } from "../hooks/context";
import { CSVIcon, DeleteIcon, ExcelIcon, PDFIcon, PrintIcon } from "../icons";
import { HeadingT, IncomingTableDataT } from "../interface/interface.table";

export default function Exports(data: { plus_checkbox_header: HeadingT<any>[], tableName:string, tableData:IncomingTableDataT<any> }) {
  const { state, dispatch } = useTableContext();

  function shower (fileShow:boolean=true) {
    if(typeof data.tableData.show.exports === "boolean") {
      return data.tableData.show.exports
    } else {
      return fileShow
    }
    
  }

  return (
    <div className="sm:col-span-7 md:col-span-5 lg:col-span-7">
      <div className=" btn-group">
        {(shower(
          state.show.csv
        )) && (
          <button
            onClick={() =>
              handleFileExport("csv", state.remoteData, data.tableName)
            }
            className="btn buttons-csv buttons-html5 btn-sm"
            tabIndex={0}
            aria-controls="users_table"
          >
            <span className="file-handler-icon">
              <i className="fa fa-file-csv" aria-hidden="true">
                <CSVIcon />
              </i>{" "}
              Export to CSV
            </span>
          </button>
        )}
        {(
          shower(
            state.show.excel
          )
        ) && (
          <button
            onClick={() =>
              handleFileExport("excel", state.remoteData, data.tableName)
            }
            className="btn buttons-excel buttons-html5 btn-sm"
            tabIndex={0}
            aria-controls="users_table"
          >
            <span className="file-handler-icon">
              <i className="fa fa-file-excel" aria-hidden="true">
                <ExcelIcon />
              </i>{" "}
              Export to Excel
            </span>
          </button>
        )}
      {shower(state.show.print)&&  <button
          onClick={() =>
            handleFileExport("print", state.remoteData, data.tableName)
          }
          className="btn buttons-print buttons-html5 btn-sm"
          tabIndex={0}
          aria-controls="users_table"
        >
          <span className="file-handler-icon">
            <i className="fa fa-print" aria-hidden="true">
              <PrintIcon />
            </i>{" "}
            Print
          </span>
        </button>}

     {state.show.columnVisibility &&   <div className="  top-0 btn buttons-html4  ">
          <span
            className="file-handler-icon"
            onClick={() => toggleColumnMenu(dispatch)}
          >
            <i className="fa fa-columns" aria-hidden="true"></i> Column
            visibility
          </span>
          {state.isColumnMenuOpen && (
            <div
              className="column-visibility-menu  top-full bg-white p-2 border shadow-sm  "
              style={{
                background: "white",
                padding: "8px",
                border: "1px",
              }}
            >
              {data &&
                data.plus_checkbox_header &&
                data.plus_checkbox_header.map((header, index) => (
                  <label
                    key={index}
                    className="column-visibility-item    text-[12px] py-[2px] "
                  >
                    <div className="w-[0.9rem] h-[0.9rem]">
                      <input
                        type="checkbox"
                        className="check-box "
                        style={{
                          boxShadow: `inset 1em 1em ${state.style.primary}`,
                        }}
                        checked={
                          state.columnVisibility[header.key as any] !== false
                        }
                        onChange={() =>
                          handleColumnVisibility(dispatch, header.key as any)
                        }
                      />
                    </div>
                    {"  "}
                    {header.name}
                  </label>
                ))}
            </div>
          )}
        </div>}

        {shower(
          state.show.pdf
     )&&   <button
          onClick={() =>
            handleFileExport("pdf", state.remoteData, data.tableName)
          }
          className="btn buttons-pdf buttons-html5 btn-sm"
          tabIndex={0}
          aria-controls="users_table"
        >
          <span className="file-handler-icon">
            <i className="fa fa-file-pdf" aria-hidden="true">
              <PDFIcon />
            </i>{" "}
            Export to PDF
          </span>
        </button>}

    {  state.show.deleteButton&& state.show.checkBox &&  <button
          className="btn buttons-pdf buttons-html5 btn-sm"
          onClick={
            () => {
              const filteredData = state.bodyData.filter((data) => data.checkBox && data.checkBox === true);

              if (filteredData.length > 0) {
                data.tableData.fn.deleteFn && data.tableData.fn.deleteFn(filteredData as any);
              }
            }
          }
          disabled={state.bodyData.filter((data)=> data.checkBox&& data.checkBox ===true).length > 0 ? false : true}
        >
          <span className="file-handler-icon">
            <i className="fa fa-trash" aria-hidden="true">
              <DeleteIcon />
            </i>{" "}
            Delete
          </span>
        </button>}
      </div>
    </div>
  );
}
