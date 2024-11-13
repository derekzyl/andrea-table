
import { addHeader } from "../add_column";
import { onChangeHandler } from "../functions/change";
import { handleSort } from "../functions/sort";
import { useTableContext } from "../hooks/context";
import { DownArrow, UpArrow } from "../icons";
import { HeadingT, IncomingTableDataT } from "../interface/interface.table";

export default function TableHead(data: { data: IncomingTableDataT }) {
  const { state, dispatch } = useTableContext();
  const show = data.data.show;
  const showCheckBox = false; /* show.checkBox ?? true; */
  const showSort = show.sort ?? true;
  const checkbox_header: HeadingT[] = showCheckBox
    ? [
        {
          canSort: false,
          key: "checkBox",
          name: "check box",
         isHeader: true,
          canFilter: false,
        },
      ]
    : [];
  const plus_checkbox_header = addHeader(data.data.heading, checkbox_header);
  const visibleHeaders = plus_checkbox_header.filter(
    (header) => state!.columnVisibility[header.key] !== false
  );
  return (
    <thead>
      <tr role="row">
        {visibleHeaders &&
          visibleHeaders.map((value, index) => {
            const isHeader = value.isHeader??true;
            const canSort = value.canSort??false;
            return (
              isHeader && (
                <th
                  key={index}
                  className="px-[4px] text-[12px]"
                  style={{
                    paddingLeft: "4px",
                    paddingRight: "4px",
                    fontSize: "12px",
                    background: `${state.color.tertiary}`,
                  }}
                >
                  <div
                    className="header-cell-content px-[2px]"
                    style={{ paddingRight: "2px", paddingLeft: "2px" }}
                  >
                    <>
                      {value.key === "checkBox" && showCheckBox ? (
                        <div className="check-box-container">
                          <input
                            type="checkbox"
                            className="check-box"
                            onChange={(e) =>
                              onChangeHandler(dispatch, state, e, "")
                            }
                            checked={state.selectAll}
                            name="checkBox"
                          />
                          <label
                            className="check-box-label text-[14px]"
                            style={{ fontSize: "12px" }}
                          >
                            Select All
                          </label>
                        </div>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: value.name,
                          }}
                        />
                      )}
                    </>
                    <div
                      className="sort-icons pl-[2px] "
                      style={{ paddingLeft: "2px", cursor: "pointer" }}
                      onClick={() => {
                        handleSort(dispatch, value.key);
                      }}
                    >
                      {canSort && showSort ? (
                        state.sortConfig.order === "asc" &&
                        state.sortConfig.key === value.key ? (
                          <UpArrow />
                        ) : (
                          <DownArrow />
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </th>
              )
            );
          })}
      </tr>
    </thead>
  );
}
