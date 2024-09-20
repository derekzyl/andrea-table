
import { handleColumnVisibility } from "../functions/column-visible";
import { handleDelete } from "../functions/delete";
import { handleFileExport } from "../functions/file-exports";
import { toggleColumnMenu } from "../functions/toggleMenu";
import { useTableContext } from "../hooks/context";
import { CSVIcon, DeleteIcon, ExcelIcon, PDFIcon, PrintIcon } from "../icons";
import { HeadingT } from "../interface/interface.table";

export default function Exports(data: { plus_checkbox_header: HeadingT[] }) {
  const { state, dispatch } = useTableContext();
  return (
    <div className="sm:col-span-7 md:col-span-5 lg:col-span-7">
      <div className=" btn-group">
        <button
          onClick={() => handleFileExport("csv", state.remoteData)}
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
        <button
          onClick={() => handleFileExport("excel", state.remoteData)}
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
        <button
          onClick={() => handleFileExport("print", state.remoteData)}
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
        </button>

        <div className="  top-0 btn buttons-html4  ">
          <span
            className="file-handler-icon"
            onClick={() => toggleColumnMenu(dispatch)}
          >
            <i className="fa fa-columns" aria-hidden="true"></i> Column
            visibility
          </span>
          {state.isColumnMenuOpen && (
            <div className="column-visibility-menu  top-full bg-white p-2 border shadow-sm  "
            style={{
              background:'white',
              padding:'8px',
              border:"1px"
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
                          boxShadow:`inset 1em 1em ${state.color.primary}`
                        }}

                        checked={state.columnVisibility[header.key] !== false}
                        onChange={() =>
                          handleColumnVisibility(dispatch, header.key)
                        }
                      />
                    </div>
                    {"  "}
                    {header.name}
                  </label>
                ))}
            </div>
          )}
        </div>

        <button
          onClick={() => handleFileExport("pdf", state.remoteData)}
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
        </button>

        <button
          className="btn buttons-pdf buttons-html5 btn-sm"
          onClick={handleDelete}
          disabled={state.selectedItems.length === 0 ? true : false}
        >
          <span className="file-handler-icon">
            <i className="fa fa-trash" aria-hidden="true">
              <DeleteIcon />
            </i>{" "}
            Delete
          </span>
        </button>
      </div>
    </div>
  );
}
