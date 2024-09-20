import { Dispatch } from "react";
import { IAction } from "../interface/interface.table";
import { ActionTableTypesE } from "../state-manager/table-action-types";

/**
 * Handles the column visibility for the given key.
 *
 * @param {Dispatch<IAction>} dispatch - The dispatch function for the action.
 * @param {string} key - The key of the column.
 * @return {void} This function does not return anything.
 */
export function handleColumnVisibility(
  dispatch: Dispatch<IAction>,
  key: string
) {
  dispatch({ type: ActionTableTypesE.SET_COLUMN_VISIBILITY, payload: key });
}
