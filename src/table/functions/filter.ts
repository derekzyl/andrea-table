/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "react";
import { HeadingT, IAction, InitialStateI } from "../interface/interface.table";
import { ActionTableTypesE } from "../state-manager/table-action-types";

/**
 * The function `handleFilterChange` is used to handle changes in a filter select element and update
 * the filter values in the state accordingly.
 * @param dispatch - The dispatch function is used to dispatch actions to the Redux store. It is
 * typically provided by the useDispatch hook from the react-redux library.
 * @param {InitialStateI} state - The state parameter is an object that represents the current state of
 * the application. It contains various properties and values that are used to manage the state of the
 * application.
 * @param e - The `e` parameter is a React.ChangeEvent<HTMLSelectElement> event object that represents
 * the change event on a select element. It is used to get the selected value from the select element.
 * @param {string} key - The `key` parameter is a string that represents the key of the filter value
 * being changed.
 * @param {HeadingT[]} plus_checkbox_header - An array of objects representing the headers of a table.
 * Each object has the following properties:
 * @param {any[]} de - The `de` parameter is an array of data that needs to be filtered.
 */
export function handleFilterChange(
  dispatch: Dispatch<IAction>,
  state: InitialStateI,
  e:
    | React.ChangeEvent<HTMLSelectElement>
    | React.KeyboardEvent<HTMLInputElement>,
  key: string,
  plus_checkbox_header: HeadingT[],
  de: any[]
) {
  dispatch({
    type: ActionTableTypesE.SET_FILTER_VALUES,
    payload: { key, value: e.currentTarget.value },
  });

  if (state.filterValues && Object.keys(state.filterValues).length > 0) {
    /*  const filteredData = */ de.filter((item) => {
      // Check each key value for a match
      return plus_checkbox_header.every((header) => {
        if (header.canFilter) {
          const key = header.key.replace("_", "");

          const filterValue = state.filterValues[key];
          // //console.log("inside here", header.key, filterValue);
          return filterValue === "" || item[key] === filterValue;
        }
        return true; // If not a filterable header, consider it a match
      });
    });
    // //console.log(
    //   "body data",
    //   bodyData.slice(0, 10),
    //   "filtered data",
    //   filteredData
    // );
    // setRemoteData(filteredData);
  }
}
export function handleFilterSelect(
  dispatch: Dispatch<IAction>,
  state: InitialStateI,
  e:any,
  key: string,
  plus_checkbox_header: HeadingT[],
  de: any[]
) {
  dispatch({
    type: ActionTableTypesE.SET_FILTER_VALUES,
    payload: { key, value: e },
  });

  if (state.filterValues && Object.keys(state.filterValues).length > 0) {
    /*  const filteredData = */ de.filter((item) => {
      // Check each key value for a match
      return plus_checkbox_header.every((header) => {
        if (header.canFilter) {
          const key = header.key.replace("_", "");

          const filterValue = state.filterValues[key];
          // //console.log("inside here", header.key, filterValue);
          return filterValue === "" || item[key] === filterValue;
        }
        return true; // If not a filterable header, consider it a match
      });
    });
    // //console.log(
    //   "body data",
    //   bodyData.slice(0, 10),
    //   "filtered data",
    //   filteredData
    // );
    // setRemoteData(filteredData);
  }
}
