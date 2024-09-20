import { Dispatch } from "react";
import { IAction } from "../interface/interface.table";
import { ActionTableTypesE } from "../state-manager/table-action-types";

/**
 * The function toggles the state of the column menu by dispatching an action.
 * @param dispatch - The `dispatch` parameter is a function that is used to dispatch actions to the
 * Redux store. It takes an action object as an argument and sends it to the Redux store, which then
 * triggers the corresponding reducer function to update the state.
 */
export function toggleColumnMenu(dispatch: Dispatch<IAction>) {
  dispatch({ type: ActionTableTypesE.SET_IS_COLUMN_MENU_OPEN, payload: "" });
  // setIsColumnMenuOpen((prevState) => !prevState);
}
