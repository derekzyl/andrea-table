/* eslint-disable @typescript-eslint/no-unused-expressions */
import { memo, useEffect } from "react";
import "../index.styles.andrea.css";

import { addColumns, addHeader } from "./add_column";
import Exports from "./components/exports";
import Filter from "./components/filter";
import Paginate from "./components/paginate";
import Search from "./components/search";
import Select from "./components/select";
import TableMain from "./components/table-main";
import { useTableContext } from "./hooks/context";
import { TableContextProvider } from "./hooks/context-hooks";
import { PlusIcon } from "./icons";
import { HeadingT, IncomingTableDataT } from "./interface/interface.table";
import { ActionTableTypesE } from "./state-manager/table-action-types";


function NewTableMemo(data: { data: IncomingTableDataT }) {
  const query = data.data.query;
  const pageQuery = query.pageName ?? "page";
  const limitQuery = query.limitName ?? "limit";
  const show = data.data.show;
  const showAddButton = show.addButton ?? true;
  

  const primaryColor = data.data.color?.primary ?? "hsl(43, 71%, 51%)";
  const secondaryColor = data.data.color?.secondary ?? "hsl(43, 71%, 42%)";
  const tertiaryColor = data.data.color?.tertiary ?? "hsl(43, 71%, 60%)";



  const showCustomButton = show.customButton ?? false;
const customButtonName = data.data.buttonName?.customButton ?? "Custom Button";

  const showFilters = show.filters ?? true;
  const showPagination = show.pagination ?? true;
  const showSearch = show.search ?? true;
  const showSelect = show.select ?? true;


  const showTable = show.table ?? true;
  const showExports = show.exports ?? true;
  const showCheckBox = show.checkBox ?? true;
  const showSeeMore = show.seeMore ?? false;
  const canAdd = data.data.crud.add ?? true;
  const canCustom = data.data.crud.custom ?? true;
  const showTableName = show.tableName ?? true;
  const checkbox_header: HeadingT[] = showCheckBox
    ? [
        {
          can_sort: false,
          key: "check_box",
          name: "check box",
          is_header: true,
          can_filter: false,
        },
      ]
    : [];
  const plus_checkbox_header = addHeader(data.data.heading, checkbox_header);

  const { state, dispatch } = useTableContext();

  useEffect(() => {
    dispatch({
      type: ActionTableTypesE.SET_LOADING,
      payload: true,
    });
    if (data.data.refresh && data.data.refresh.status) {
      setInterval(() => {
        data.data.fn.fetch_fn(generateURL(), data.data.base_url).then((res) => {
          dispatch({
            type: ActionTableTypesE.SET_REMOTE_DATA,
            payload: res,
          });
        });
      }, data.data.refresh.intervalInSec * 1000);
      // return () => clearInterval(d);
    }
    data.data.fn.fetch_fn(generateURL(), data.data.base_url).then((res) => {
      dispatch({
        type: ActionTableTypesE.SET_REMOTE_DATA,
        payload: res,
      });
      if (res) {
        dispatch({
          type: ActionTableTypesE.SET_LOADING,
          payload: false,
        });
      }
    });

    function generateURL() {
      const urlSearchParams = new URLSearchParams(location.search);

      Object.entries(state.filterValues).forEach(([key, value]) => {
        urlSearchParams.set(key, value);
      });

      const queryString = urlSearchParams.toString();
      if (pageQuery === "skip") {
        

        return `${data.data.sub_url}?${pageQuery}=${(state.filterPaginate -1)*state.filterLimit}&${limitQuery}=${state.filterLimit}&${queryString}`;
      }

      return `${data.data.sub_url}?${pageQuery}=${state.filterPaginate}&${limitQuery}=${state.filterLimit}&${queryString}`;
    }

    // fetchData();
  }, [
    data.data.base_url,
    data.data.sub_url,
    state.filterValues,
    state.filterPaginate,
    state.filterLimit,
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
    dispatch({type:ActionTableTypesE.SET_COLOR, payload:{primary:primaryColor, secondary:secondaryColor, tertiary:tertiaryColor}})
  })
  return (
    <>
      <section className="content elevated-paper ">
        {/* filter starts here */}

        {showFilters && <Filter data={de} header={plus_checkbox_header} />}

        {/* filter ends here */}

        <div className="">
          {(showAddButton || showTableName || showSeeMore) && (
            <div className="box-header  ">
              {showTableName && (
                <div
                  className="box-title capitalize text-[18px]"
                  style={{ fontSize: "18px", textTransform: "capitalize", fontWeight:'bolder' }}
                >
                  {data.data.table_name}
                </div>
              )}
              {showAddButton && canAdd && (
                <div
                  className="box-tools pl-1 hover:cursor-pointer show-button-setup"
                  onClick={() => {
                    data.data.fn.add_fn ? data.data.fn.add_fn() : "";
                  }}
                >
                  <div
                    className=" custom-button   btn-primary"
                    style={{ background: state.color.primary }}
                  >
                    <i className="custom-icon-bcg w-[28px] h-[28px] text-[#fff] show-button-setup-icon"
                    
                      style={{
                        width: "28px",
                        height: "28px",
                        color: "#fff",
                        background: state.color.primary,
                        boxShadow:`inset 0px -1px 2px 1px ${state.color.tertiary}, inset 0px 2px 2px 1px ${state.color.secondary}`
                        
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
                    data.data.fn.custom_fn ? data.data.fn.custom_fn() : "";
                  }}
                >
                  <div
                    className=" custom-button   btn-primary"
                    style={{ background: state.color.primary }}
                  >
                    <i className="custom-icon-bcg w-[28px] h-[28px] text-[#fff] show-button-setup-icon">
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
                    data.data.fn.goto_fn && data.data.fn.goto_fn();
                  }}
                >
                  <div className=" custom-button   btn-secondary"
                  style={{
                    color:state.color.primary,
                    border:`1px solid ${state.color.primary}`

                  }}
                  >
                    <div className=" text">See More</div>
                    <i className="custom_submerged_gray w-[28px] h-[28px] show-button-setup-icon">
                      <PlusIcon />
                    </i>{" "}
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="box-body">
            <div className="">
              <div
                id="table_wrapper"
                className="andreaTables_wrapper andreaTable-header  align-middle justify-center form-inline dt-bootstrap no-footer"
              >
                {(showExports || showSelect || showSearch) && (
                  <div className=" elevated-paper p-[8px]  file-download-handler  row mb-[20px] text-center font-normal flex justify-between export-select-search-wrapper m-2">
                    {showSelect && <Select />}
                    {showExports && (
                      <Exports plus_checkbox_header={plus_checkbox_header} />
                    )}

                    {showSearch && <Search />}
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
        <div
          className="modal fade user_modal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="gridSystemModalLabel"
        ></div>
      </section>
    </>
  );
}

const Tabl = (data: { data: IncomingTableDataT }) => {
  return (
    <TableContextProvider>
      <NewTableMemo data={data.data} />
    </TableContextProvider>
  );
};
export const NewTable = memo(Tabl);
