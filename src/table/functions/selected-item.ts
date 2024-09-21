/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "react";
import { IAction } from "../interface/interface.table";
import { ActionTableTypesE } from "../state-manager/table-action-types";

/**
 * The function `updateSelectedItems` updates the selected items in a table based on the updated data.
 * @param dispatch - The `dispatch` parameter is a function that is used to dispatch actions to the
 * Redux store. It is typically provided by the `react-redux` library and is used to update the state
 * of the application.
 * @param {Record<string, any>[]} updatedData - An array of objects representing updated data. Each
 * object in the array should have a "checkBox" property and an "_id" property.
 */
export function updateSelectedItems(
  dispatch: Dispatch<IAction>,
  updatedData: Record<string, any>[]
) {
  const selected = updatedData
    .filter((row) => row.checkBox)
    .map((row) => row.id);
  dispatch({
    type: ActionTableTypesE.SET_SELECTED_ITEMS,
    payload: selected,
  });
}
