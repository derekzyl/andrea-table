/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "react";
import { IAction, InitialStateI } from "../interface/interface.table";
import { ActionTableTypesE } from "../state-manager/table-action-types";
import { updateSelectedItems } from "./selected-item";

/**
 * Handles the change event for the input fields in the UI.
 *
 * @param {Dispatch<IAction>} dispatch - The dispatch function from the reducer.
 * @param {InitialStateI} state - The current state of the application.
 * @param {React.ChangeEvent<any>} e - The change event from the input field.
 * @param {string} id - The id of the input field.
 */
export const onChangeHandler = (
  dispatch: Dispatch<IAction>,
  state: InitialStateI,
  e: React.ChangeEvent<any>,
  id: string
) => {
  e.preventDefault();
  const value = e.target.value.toLowerCase();
  switch (e.target.name) {
    case "filter_limit":
      {
        dispatch({ type: ActionTableTypesE.SET_FILTER_LIMIT, payload: value });
      }

      break;
    case "filter_paginate":
      {
        dispatch({
          type: ActionTableTypesE.SET_FILTER_PAGINATE,
          payload: value,
        });
      }
      break;
    case "filter_search":
      {
        // Filter data based on the search term
        dispatch({ type: ActionTableTypesE.SET_FILTER_SEARCH, payload: value });
      }
      break;

    case "checkBox":
      // Handle checkbox in the header
      //   setSelectAll(() => e.target.checked);

      dispatch({
        type: ActionTableTypesE.SET_SELECT_ALL,
        payload: e.target.checked,
      });

      // Update the state of each checkbox in the rows
      //   setBodyData((prevData) => {
      //     const updatedData = prevData.map((row) => ({
      //       ...row,
      //       checkBox: selectAll,
      //     }));

      dispatch({ type: ActionTableTypesE.SET_CHECK_BOX, payload: "" });

      updateSelectedItems(dispatch, state.bodyData);

      break;
    default:
      {
        // Handle checkboxes in the rows
        console.log({checkBox:"called"})
        const updatedData = state.bodyData.map((item, idx) => {
          console.log({test:item.checkBox, id, itemId:idx})
          if (String(idx) === id) {
            return {
              ...item,
              checkBox:item.checkBox==='undefined'?true: !item.checkBox,
            };
          }
          return item;
        });
        // //console.log(updatedData, "updated data");

        dispatch({
          type: ActionTableTypesE.SET_BODY_DATA,
          payload: updatedData,
        });
        dispatch({ type: ActionTableTypesE.SET_CHECKED_ITEMS, payload: id });
        updateSelectedItems(dispatch, updatedData);
      }
      break;
  }
};
