/* eslint-disable @typescript-eslint/no-unused-expressions */
import { memo, useEffect } from "react";
import "../index.styles.andrea.css";

import { addColumns, addHeader } from "./add_column";
import Exports from "./components/exports";
import Filter from "./components/filter";
import Paginate from "./components/paginate";
import TableMain from "./components/table-main";
import { compareArraysOfObjects } from "./functions/deep-compare";
import { useTableContext } from "./hooks/context";
import { TableContextProvider } from "./hooks/context-hooks";
import { PlusIcon } from "./icons";
import { HeadingT, IncomingTableDataT } from "./interface/interface.table";
import { ActionTableTypesE } from "./state-manager/table-action-types";

function NewTableMemo(data: { data: IncomingTableDataT<any> }) {
  const query = data.data.query;
  const pageQuery = query.pageName ?? "page";
  const limitQuery = query.limitName ?? "limit";
  const searchQuery = query.searchQueryName ?? "";
  const show = data.data.show;
  const showAddButton = show.addButton ?? true;

  const primaryColor = data.data.style?.primary ?? "hsl(43, 71%, 51%)";
  const secondaryColor = data.data.style?.secondary ?? "hsl(43, 71%, 42%)";
  const tertiaryColor = data.data.style?.tertiary ?? "hsl(43, 71%, 60%)";
  const backgroundColor = data.data.style?.background ?? "hsl(40, 8%, 94%)";
  const cellBackground = data.data.style?.cellBackground ?? "hsl(40, 5%, 96%)";
  const filterBackground =
    data.data.style?.filterBackground ?? "hsl(0, 0%, 99%)";
  const exportBackground =
    data.data.style?.exportBackground ?? "hsl(0, 0%, 99%)";
  
  const border = data.data.style?.borderSpacing ?? "1px";
const cellHoverBackground = data.data.style?.cellHoverBackground ?? "hsl(40,5%,90%)";



  const showCustomButton = show.customButton ?? false;
  const customButtonName =
    data.data.buttonName?.customButton ?? "Custom Button";

  const showFilters = show.filters ?? true;
  const showPagination = show.pagination ?? true;
  const showSearch = show.search ?? true;
    const showSelect = show.select ?? true;


  const showTable = show.table ?? true;

  let showExports = true
   
  let showPdf = false;
  let showCsv = false;
  let showExcel = false;
  let showPrint =false;

  
  if (typeof show.exports === 'boolean') {
    showPdf = show.exports;
    showCsv = show.exports;
    showExcel = show.exports;
    showPrint = show.exports;
    showExports = show.exports;

  } else {
    showPdf = show.exports?.pdf ?? false;
    showCsv = show.exports?.csv ?? false;
    showExcel = show.exports?.excel ?? false;
    showPrint = show.exports?.print ?? false;
    showExports = (show.exports?.pdf ?? false) || (show.exports?.csv ?? false) || (show.exports?.excel ?? false) || (show.exports?.print ?? false);
    
  }
 
  const showDeleteButton = show.deleteButton ?? false;
  const showColumnVisibility = show.columnVisibility ?? false;
  const showCheckBox = show.checkBox ?? true;
  const showSeeMore = show.seeMore ?? false;
  const canAdd = data.data.crud.add ?? true;
  const canCustom = data.data.crud.custom ?? true;
  const showTableName = show.tableName ?? true;
  const checkbox_header: HeadingT<any>[] = showCheckBox
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


  const { state, dispatch } = useTableContext();
  useEffect(() => {
    dispatch({
      type: ActionTableTypesE.SET_SHOW,
      payload: {
        exports: showExports,
        pdf: showPdf,
        csv: showCsv,
        excel: showExcel,
        print: showPrint,
        columnVisibility: showColumnVisibility,
        deleteButton: showDeleteButton,
        addButton: showAddButton,
        checkBox: showCheckBox,
        customButton: showCustomButton,
        seeMore: showSeeMore,
        tableName: showTableName,
      },
    });
  }, [
    showExports,
    showPdf,
    showCsv,
    showExcel,
    showPrint,
    showColumnVisibility,
    showDeleteButton,
    showAddButton,
    showCheckBox,
    showCustomButton,
    showSeeMore,
    showTableName,
  ]);
  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const fetchData = () => {
      dispatch({
        type: ActionTableTypesE.SET_LOADING,
        payload: true,
      });


    function generateURL() {
      const urlSearchParams = new URLSearchParams(location.search);

      Object.entries(state.filterValues).forEach(([key, value]) => {
        urlSearchParams.set(key, value);
      });

      const queryString = urlSearchParams.toString();
      if (pageQuery === "skip") {
        if (searchQuery && searchQuery?.length > 0) {
          if (state.filterSearch?.length >= 5) {
       return `${data.data.subUrl}?${pageQuery}=${
         (state.filterPaginate - 1) * state.filterLimit
       }&${limitQuery}=${state.filterLimit}&${searchQuery}=${
         state.filterSearch
       }&${queryString}`;

           }
        }


        return `${data.data.subUrl}?${pageQuery}=${
          (state.filterPaginate - 1) * state.filterLimit
        }&${limitQuery}=${state.filterLimit}&${queryString}`;
      }
      console.log({
        searchQuery,
        filter: state.filterSearch,
        ddkdk: "sssssss",
      });

      if (searchQuery && searchQuery.length > 0) {
        if (state.filterSearch.length >= 5) {
          return `${data.data.subUrl}?${pageQuery}=${state.filterPaginate}&${limitQuery}=${state.filterLimit}&${searchQuery}=${state.filterSearch}&${queryString}`;
        }
      }

      return `${data.data.subUrl}?${pageQuery}=${state.filterPaginate}&${limitQuery}=${state.filterLimit}&${queryString}`;
    }
      data.data.fn
        .fetchFn({ url: generateURL(), baseUrl: data.data.baseUrl })
        .then((res) => {
          if (compareArraysOfObjects(state.remoteData, res)) {
            dispatch({
              type: ActionTableTypesE.SET_LOADING,
              payload: false,
            });
            return;
          }
          dispatch({
            type: ActionTableTypesE.SET_REMOTE_DATA,
            payload: res,
          });
        })
        .catch((error) => {
          console.error("Fetch error:", error);
          // Optionally dispatch an error action
        })
        .finally(() => {
          dispatch({
            type: ActionTableTypesE.SET_LOADING,
            payload: false,
          });
        });
    };

    fetchData();
    if (
      data.data.refresh &&
      data.data.refresh.status &&
      data.data.refresh.intervalInSec
    ) {
      intervalId = setInterval(() => {
        fetchData();
      }, data.data.refresh.intervalInSec * 1000);
    }
  
    // return () => clearInterval(d);

    return () => {
      clearInterval(intervalId);
    };

    // fetchData();
  }, [
    data.data.baseUrl,
    data.data.subUrl,
    state.filterValues,
    state.filterPaginate,
    state.filterSearch,
    state.filterLimit,
    data.data.query.searchQueryName,
    data.data.refresh?.status,
    data.data.refresh?.intervalInSec,

   

  ]);

  useEffect(() => {
    //   setBodyData(remoteData);
    dispatch({
      type: ActionTableTypesE.SET_BODY_DATA,
      payload: state!.remoteData,
    });
  }, [state.remoteData]);
  useEffect(() => {
    //   setBodyData(remoteData);
  }, [state.selectAll, state.selectedItems]);
  const de = !data.data.column
    ? state.bodyData
    : addColumns(state.bodyData, data.data.column);

  useEffect(() => {
    dispatch({
      type: ActionTableTypesE.SET_COLOR,
      payload: {
        primary: primaryColor,
        secondary: secondaryColor,
        tertiary: tertiaryColor,
        background: backgroundColor,
        cellBackground: cellBackground,
        filterBackground: filterBackground,
        exportBackground: exportBackground,
        borderSpacing: border,
        cellHoverBackground: cellHoverBackground,
        
      },
    });
  }, [

    primaryColor,
    secondaryColor,
    tertiaryColor,
    backgroundColor,
    cellBackground,
    filterBackground,
    exportBackground,
    border,
  ]);

  return (
    <>
      <section
        className=""
        style={{
          background: backgroundColor,
        }}
      >
        {(showAddButton ||
          showTableName ||
          showSeeMore ||
          showCustomButton) && (
          <div className="box-header  ">
            {showTableName && (
              <div
                className="box-title capitalize text-[18px]"
                style={{
                  fontSize: "18px",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  color: `${state.style.primary}`,
                }}
              >
                {data.data.tableName}
              </div>
            )}
            {showAddButton && canAdd && (
              <div
                className="box-tools pl-1 hover:cursor-pointer show-button-setup"
                onClick={() => {
                  data.data.fn.addFn ? data.data.fn.addFn() : "";
                }}
              >
                <div
                  className=" custom-button   btn-primary"
                  style={{
                    background: state.style.primary,
                    color: state.style.secondary,
                  }}
                >
                  <i
                    className="custom-icon-bcg w-[28px] h-[28px] text-[#fff] show-button-setup-icon"
                    style={{
                      width: "16px",
                      height: "16px",
                      color: state.style.primary,
                      background: state.style.secondary,
                      marginRight: "4px",
                    }}
                  >
                    <PlusIcon />
                  </i>{" "}
                  <div className="add-button text">Add</div>
                </div>
              </div>
            )}{" "}
            {showCustomButton && canCustom && (
              <div
                className="box-tools pl-1 hover:cursor-pointer show-button-setup"
                onClick={() => {
                  data.data.fn.customFn ? data.data.fn.customFn() : "";
                }}
              >
                <div
                  className=" custom-button   btn-primary"
                  style={{
                    background: state.style.primary,
                    color: state.style.secondary,
                  }}
                >
                  <i
                    className="custom-icon-bcg w-[28px] h-[28px] text-[#fff] show-button-setup-icon"
                    style={{
                      width: "16px",
                      height: "16px",
                      color: state.style.primary,
                      background: state.style.secondary,
                      marginRight: "4px",
                    }}
                  >
                    <PlusIcon />
                  </i>{" "}
                  <div className="add-button text">{customButtonName}</div>
                </div>
              </div>
            )}{" "}
            {showSeeMore && (
              <div
                className="box-tools  hover:cursor-pointer"
                onClick={() => {
                  data.data.fn.gotoFn && data.data.fn.gotoFn();
                }}
              >
                <div
                  className=" custom-button   btn-secondary"
                  style={{
                    color: state.style.primary,
                    border: `1px solid ${state.style.primary}`,
                  }}
                >
                  <div className=" text">See More</div>
                  <i
                    className="custom_submerged_gray w-[20px] h-[20px] show-button-setup-icon"
                    style={{
                      color: state.style.primary,
                      width: "16px",
                      height: "16px",
                    }}
                  >
                    <PlusIcon />
                  </i>{" "}
                </div>
              </div>
            )}
          </div>
        )}

        {/* filter starts here */}

        <div
          className="custom-elevated-paper"
          style={{
            margin: "4px",
          }}
        >
          {data.data.tableDescription && (
            <div
              className="table-description"
              style={{
                padding: "8px",

                color: "hsl(0, 0%, 40%)",
                fontSize: "14px",
                fontWeight: 500,
                textAlign: "start",
              }}
            >
              {data.data.tableDescription}
            </div>
          )}
          {data.data.extraComponent && (
            <div
              className="extra-component"
              style={{
                padding: "8px",

              }}
            >
              {data.data.extraComponent}
            </div>
          )}
          {(showFilters || showSearch || showSelect) && (
            <Filter
              data={de}
              header={plus_checkbox_header}
              incomingData={data.data}
            />
          )}

          {/* filter ends here */}

          <div className="">
            <div className="box-body">
              <div className="">
                <div
                  id="table_wrapper"
                  className="andreaTables_wrapper andreaTable-header  align-middle justify-center form-inline dt-bootstrap no-footer"
                >
                  {(showExports || showColumnVisibility) && (
                    <div
                      className="   row mb-[20px] text-center font-normal flex justify-between export-select-search-wrapper "
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        background: exportBackground,
                        borderRadius: "8px",
                      }}
                    >
                      {((typeof show.exports === "boolean" && showExports) ||
                        showColumnVisibility ||
                        showDeleteButton ||
                        showPdf ||
                        showCsv ||
                        showExcel ||
                        showPrint) && (
                        <Exports
                          plus_checkbox_header={plus_checkbox_header}
                          tableName={data.data.tableName}
                          tableData={data.data}
                        />
                      )}
                    </div>
                  )}
                  <div
                    className="bg-gray-500 table-responsive"
                    style={{ background: "hsl(0, 0%, 92%)" }}
                  >
                    {showTable && <TableMain data={data.data} />}
                  </div>

                  {showPagination && (
                    <div
                      className="andreaTables_info"
                      id="users_table_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing {state!.filterPaginate} to{" "}
                      {state!.filterPaginate * state!.filterLimit < de?.length
                        ? state!.filterLimit
                        : de?.length}{" "}
                      of {de?.length} entries
                    </div>
                  )}

                  {showPagination && (
                    <Paginate
                      de_length={state.bodyData && state.bodyData?.length}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const Tabl = (data: { data: IncomingTableDataT<any> }) => {
  return (
    <TableContextProvider>
      <NewTableMemo data={data.data} />
    </TableContextProvider>
  );
};
export const NewTable = memo(Tabl);
