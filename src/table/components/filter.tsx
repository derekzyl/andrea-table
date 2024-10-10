/* eslint-disable @typescript-eslint/no-explicit-any */

import { handleFilterChange } from "../functions/filter";
import { useTableContext } from "../hooks/context";
import { FilterIcon } from "../icons";
import { HeadingT } from "../interface/interface.table";
import { ActionTableTypesE } from "../state-manager/table-action-types";
import { CalendarFilter } from "./date-filter";

export default function Filter (data: { data: any[]; header: HeadingT[]; }) {
  const { state, dispatch } = useTableContext();
  const filterBackground = state.color?.filterBackground 
  const visibleHeaders = data.header.filter(
    (header) => state!.columnVisibility[header.key] !== false
  );
  return (
    <div className="filter-main" id="accordion" style={{
      backgroundColor: filterBackground
    }}>
      <div
        className=""
        style={{ cursor: "pointer" }}
        onClick={() =>
          dispatch({ type: ActionTableTypesE.SET_OPEN_FILTER_BOX, payload: "" })
        }
      >
        <h3 className="filter-header">
          <span className="w-[24px] h-[24px]" style={{
            width: "24px",
            height:"24px"
          }}>
            <FilterIcon />
          </span>{" "}
          <div className="text-[20px]" 
            style={{
            fontSize:"20px"
          }}
          >Filters</div>
        </h3>
      </div>

      {state.openFilterBox && (
        <div
          className={`filter-box submerged-paper transition-all flex flex-row flex-wrap justify-around ${
            state.openFilterBox ? "block" : "hidden"
          } `}
          hidden={state.openFilterBox}
          aria-expanded="true"
        >
          {visibleHeaders &&
            visibleHeaders.map((v, k) => {
              const canFilter = v.canFilter ?? false;
              return canFilter ? (
                <div className={"flex "}>
                  {v.key !== "createdAt" && v.key !== "calendarFilter" && (
                    <>
                      <div className="">
                        <label htmlFor="">{v.name}</label>
                        {v.isSearchFilter ? (
                          <div className="m:col-span-3 md:col-span-12 lg:col-span-3">
                            <div id="users_table_filter" className="relative">
                              <input
                                name="filter_search"
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    e.preventDefault();
                                    e.stopPropagation();

                                    handleFilterChange(
                                      dispatch,
                                      state,
                                      e,
                                      v.key,
                                      data.header,
                                      data.data
                                    );
                                  }
                                }}
                                type="search"
                                className="appearance-none border-2 pl-[10px] custom-input-andrea"
                                placeholder="  Search ..."
                                aria-controls="users_table"
                                spellCheck={false}
                                data-ms-editor="true"
                                list={`filterOptions_${k}`}
                              />

                              <div className="custom-container-icon-andrea">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="custom-search-icon-andrea"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <select
                            className="filter-form-control"
                            style={{
                              width: "calc(100% + 10px)",
                              color: `${state.color.primary}`,
                            }}
                            id=""
                            name={v.key}
                            onChange={(e) =>
                              handleFilterChange(
                                dispatch,
                                state,
                                e,
                                v.key,
                                data.header,
                                data.data
                              )
                            }
                          >
                            {/*    <datalist id={`filterOptions_${k}`}> */}{" "}
                            <option selected={true} value="All">
                              All
                            </option>
                              {v.filters ?
                                v.filters.map((item, k) => {
                                  if(item==='string'){
                                  return   <option key={k} value={item}>
                                {item}
                              </option>}else if(typeof item ==='object'){
                                    const keys = Object.keys(item)[0]
                                    return   <option key={k} value={item[keys]}>
                                {keys}
                              </option>
                                    
                              }
                                }):[]
                                
                            //     [...new Set(v.filters)].map((item, k) => (
                            //   <option key={k} value={item}>
                            //     {item}
                            //   </option>
                            // )):[]
                            
                            
                            }
                            {/* </datalist> */}
                          </select>
                        )}
                      </div>
                    </>
                  )}

                  {v.key === "createdAt" && (
                    <div className="" key={k}>
                      <div className="">
                        <label htmlFor="">Date Range</label>
                        <select
                          className="filter-form-control"
                          style={{
                            width: "calc(100% + 10px)",
                            color: `${state.color.primary}`,
                          }}
                          id=""
                          name="date_range"
                          tabIndex={-1}
                          aria-hidden="true"
                          onChange={(e) =>
                            handleFilterChange(
                              dispatch,
                              state,
                              e,
                              "date_range",
                              data.header,
                              data.data
                            )
                          }
                        >
                          <option value="All">All</option>
                          <option value="today">today</option>
                          <option value="yesterday">yesterday</option>
                          <option value="this_week">this week</option>
                          <option value="last_week">last week</option>
                          <option value="this_month">this month</option>
                          <option value="last_month">last month</option>
                          <option value="this_year">this year</option>
                          <option value="last_year">last year</option>
                        </select>
                        <span
                          className="filter-input"
                          dir="ltr"
                          style={{ width: "100%" }}
                        >
                          <span className="selection">
                            <span
                              className=""
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-labelledby="select2-purchase_list_filter_payment_status-container"
                            >
                              <span className="" role="presentation">
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span className="" aria-hidden="true"></span>
                        </span>
                      </div>
                    </div>
                  )}

                  {v.key === "calendarFilter" && (
                    <div className="" key={k}>
                      <div className="flex flex-col align-middle justify-center place-items-center">
                        <label htmlFor="">Calendar</label>
                        <CalendarFilter data={data} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                ""
              );
            })}
        </div>
      )}
    </div>
  );
}
