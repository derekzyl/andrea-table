import React, { useState } from "react";

import { addColumns, addHeader } from "../add_column";
import { onChangeHandler } from "../functions/change";
import { handleCopyToClipboard } from "../functions/copy-to-clipboard";
import { updateSelectedItems } from "../functions/selected-item";
import { useTableContext } from "../hooks/context";
import IconCopyCheck, { IconCopy } from "../icons";
import { HeadingT, IncomingTableDataT } from "../interface/interface.table";
import { ActionTableTypesE } from "../state-manager/table-action-types";
import SkeletonLoader from "./loader";

export default function TableBody(data: { data: IncomingTableDataT }) {
  const query = data.data.query;
  const pageQuery = query.pageName ?? "page";
  const limitQuery = query.limitName ?? "limit";
  const [clip, setClip] = useState<{ [key: string]: boolean }>({});

  const primaryColor = data.data.color?.primary ?? "hsl(173.32, 70%, 35.29%)";
  const cellBackground = data.data.color?.cellBackground ?? "hsl(40, 5%, 96%)";
  
  const onDeleteSuccess = () => {
    // Fetch data after successful deletion
    dispatch({
      type: ActionTableTypesE.SET_LOADING,
      payload: true,
    });
    if (data.data.refresh && data.data.refresh.status) {
      setInterval(() => {
        data.data.fn.fetchFn({url:generateURL(), baseUrl:data.data.baseUrl}).then((res) => {
          dispatch({
            type: ActionTableTypesE.SET_REMOTE_DATA,
            payload: res,
          });
        });
      }, data.data.refresh.intervalInSec * 1000);
      // return () => clearInterval(d);
    }
    data.data.fn.fetchFn({url:generateURL(), baseUrl:data.data.baseUrl}).then((res) => {
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

      return `${data.data.subUrl}?${pageQuery}=${state.filterPaginate}&${limitQuery}=${state.filterLimit}&${queryString}`;
    }
  };
  const showCheckBox = false; /* data.data.show.checkBox ?? true; */
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

  const { state, dispatch } = useTableContext();

  const visibleHeaders = plus_checkbox_header.filter(
    (header) => state!.columnVisibility[header.key] !== false
  );
  const de = !data.data.column
    ? state.bodyData
    : addColumns(state.bodyData, data.data.column);

  return (
    <tbody>
      {!de || state.loading ? (
        <SkeletonLoader data={{ cells: visibleHeaders.length, rows: 5 }} />
      ) : (
        de &&
        de.map((val, idx) => {
          return (
            <tr role="row" className="odd-one" key={idx}>
              {visibleHeaders &&
                visibleHeaders.map((v, idex) => {
                  return (
                    v.isHeader && (
                      <td key={idex} className={"td-table "} style={{background:cellBackground}}>
                        {v.key === "checkBox" ? (
                          <div>
                            <input
                              type="checkbox"
                              className="check-box"
                              checked={val.checkBox}
                              onChange={(e) => {
                                // Update the state of the current checkbox
                                onChangeHandler(dispatch, state, e, val._id);
                                // //console.log("val check", val.checkBox);

                                dispatch({
                                  type: ActionTableTypesE.SET_CHECKED_ITEMS,
                                  payload: val._id,
                                });
                                updateSelectedItems(dispatch, state.bodyData);
                              }}
                            />
                          </div>
                        ) : val[v.key] &&
                          val[v.key].props &&
                          Object.prototype.hasOwnProperty.call(
                            val[v.key].props,
                            "columnData"
                          ) ? (
                          React.cloneElement(val[v.key], {
                            columnData: val,
                            crud: data.data.crud,
                            onDeleteSuccess: onDeleteSuccess,
                          })
                        ) : (
                          <div
                            className={`flex flex-row  justify-center align-middle table-body-andrea ${
                              v.canCopy ? "cursor-pointer" : ""
                            } `}
                            onClick={() => {
                              function success(status: boolean) {
                                setClip({ [val[v.key]]: status });
                              }
                              if (v.canCopy) {
                                handleCopyToClipboard(val[v.key], success);
                              }
                            }}
                          >
                            {
                              <>
                                {!clip[val[v.key]] ? (
                                  <>
                                    {v.canCopy && (
                                      <div
                                        style={{ color: primaryColor }}
                                        className="text-[var(--primary)]"
                                      >
                                        <IconCopy />
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    {v.canCopy && (
                                            <div className="text-green-700" style={{ 
                                        color:'hsl(120, 100%, 25%)'
                                      }}>
                                        <IconCopyCheck />
                                      </div>
                                    )}
                                  </>
                                )}

                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: val[v.key],
                                  }}
                                />
                              </>
                            }
                          </div>
                        )}
                      </td>
                    )
                  );
                })}
            </tr>
          );
        })
      )}
    </tbody>
  );
}
